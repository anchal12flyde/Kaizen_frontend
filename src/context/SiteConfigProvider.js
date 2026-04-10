'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { siteConfigAPI } from '@/lib/api';

const SiteConfigContext = createContext();

// Default CSS variables as fallback
const defaultCssVariables = {
    '--color-background-1': '#f7f4eb',
    '--color-background-2': '#0a193a',
    '--color-background-3': '#1f0808',
    '--color-para-1': '#000000',
    '--color-para-2': '#ffffff',
    '--color-accent': '#b6996a',
    '--color-primary': '#b6996a',
    '--color-secondary': '#231F20',
    '--color-border': '#e5e5e5',
    '--color-error': '#dc2626',
    '--color-success': '#10b981',
    '--color-warning': '#f59e0b',
    '--color-info': '#3b82f6',
};

export function SiteConfigProvider({ children }) {
    const [cssVariables, setCssVariables] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCssVariables();
    }, []);

    const fetchCssVariables = async () => {
        try {
            setLoading(true);
            const response = await siteConfigAPI.getAllConfigs();

            // Extract CSS variables from the response
            const allConfigs = response?.data || [];
            const cssVars = {};

            allConfigs.forEach(config => {
                if (config.group === 'cssVariables') {
                    cssVars[config.key] = config.value;
                }
            });

            console.log('🎨 CSS Variables from API:', cssVars);

            // Apply CSS variables to document root
            applyCssVariables(cssVars);
            setCssVariables(cssVars);

        } catch (err) {
            console.error('Error fetching CSS variables:', err);
            // Apply default colors if API fails
            applyCssVariables(defaultCssVariables);
            setCssVariables(defaultCssVariables);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const applyCssVariables = (variables) => {
        const root = document.documentElement;

        // Apply each CSS variable to the root element
        Object.entries(variables).forEach(([key, value]) => {
            if (value && typeof value === 'string') {
                root.style.setProperty(key, value);
                console.log(`✅ Applied ${key}: ${value}`);
            }
        });

        // Also update the meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor && variables['--color-background-2']) {
            metaThemeColor.setAttribute('content', variables['--color-background-2']);
        }
    };

    // Function to update a single CSS variable
    const updateCssVariable = (key, value) => {
        const root = document.documentElement;
        root.style.setProperty(key, value);
        setCssVariables(prev => ({ ...prev, [key]: value }));
    };

    // Function to update multiple CSS variables
    const updateCssVariables = (variables) => {
        const root = document.documentElement;
        Object.entries(variables).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
        setCssVariables(prev => ({ ...prev, ...variables }));
    };

    return (
        <SiteConfigContext.Provider value={{
            cssVariables,
            loading,
            error,
            updateCssVariable,
            updateCssVariables,
        }}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export const useSiteConfig = () => {
    const context = useContext(SiteConfigContext);
    if (!context) {
        throw new Error('useSiteConfig must be used within a SiteConfigProvider');
    }
    return context;
};