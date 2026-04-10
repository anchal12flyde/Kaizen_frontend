"use client";

import { useEffect } from "react";
import { useSiteConfig } from "@/context/SiteConfigProvider";

export function SiteConfigStyles() {
    const { config } = useSiteConfig();

    useEffect(() => {
        if (!config) return;

        const styleId = "site-config-styles";
        let styleElement = document.getElementById(styleId);

        if (!styleElement) {
            styleElement = document.createElement("style");
            styleElement.id = styleId;
            document.head.appendChild(styleElement);
        }

        let css = "";

        // Generate CSS for typography
        if (config.typography?.textStyles) {
            const textStyles = config.typography.textStyles;

            Object.entries(textStyles).forEach(([styleName, styleConfig]) => {
                const variants = styleConfig.variants;

                // Map style names to CSS classes
                const className = styleName === 'heading1' ? 'display-3' :
                    styleName === 'body' ? 'para-2' :
                        `typography-${styleName}`;

                if (variants?.desktop) {
                    const desktop = variants.desktop;
                    let fontFamily = desktop.fontFamily || "inherit";

                    // Clean up Google Font reference
                    if (fontFamily.startsWith('google:')) {
                        fontFamily = fontFamily.replace('google:', '');
                    }

                    css += `
            .${className} {
                font-family: '${fontFamily}', 'Times New Roman', serif;
                font-size: ${desktop.fontSize}px;
                font-weight: ${desktop.fontWeight};
                line-height: ${desktop.lineHeight};
                letter-spacing: ${desktop.letterSpacing}em;
                text-align: ${desktop.alignment};
                ${desktop.italic ? 'font-style: italic;' : ''}
                ${desktop.underline ? 'text-decoration: underline;' : ''}
                text-transform: ${desktop.case === 'uppercase' ? 'uppercase' :
                            desktop.case === 'capitalize' ? 'capitalize' :
                                desktop.case === 'lowercase' ? 'lowercase' : 'none'};
            }
            `;
                }

                if (variants?.tablet) {
                    const tablet = variants.tablet;
                    let fontFamily = tablet.fontFamily || "inherit";
                    if (fontFamily.startsWith('google:')) {
                        fontFamily = fontFamily.replace('google:', '');
                    }

                    css += `
            @media (max-width: 1024px) {
              .${className} {
                font-family: '${fontFamily}', 'Times New Roman', serif;
                font-size: ${tablet.fontSize}px;
                font-weight: ${tablet.fontWeight};
                line-height: ${tablet.lineHeight};
                text-align: ${tablet.alignment};
                ${tablet.italic ? 'font-style: italic;' : ''}
                ${tablet.underline ? 'text-decoration: underline;' : ''}
                text-transform: ${tablet.case === 'uppercase' ? 'uppercase' :
                            tablet.case === 'capitalize' ? 'capitalize' :
                                tablet.case === 'lowercase' ? 'lowercase' : 'none'};
              }
            }
          `;
                }

                if (variants?.mobile) {
                    const mobile = variants.mobile;
                    let fontFamily = mobile.fontFamily || "inherit";
                    if (fontFamily.startsWith('google:')) {
                        fontFamily = fontFamily.replace('google:', '');
                    }

                    css += `
            @media (max-width: 768px) {
              .${className} {
                font-family: '${fontFamily}', 'Times New Roman', serif;
                font-size: ${mobile.fontSize}px;
                font-weight: ${mobile.fontWeight};
                line-height: ${mobile.lineHeight};
                text-align: ${mobile.alignment};
                ${mobile.italic ? 'font-style: italic;' : ''}
                ${mobile.underline ? 'text-decoration: underline;' : ''}
                text-transform: ${mobile.case === 'uppercase' ? 'uppercase' :
                            mobile.case === 'capitalize' ? 'capitalize' :
                                mobile.case === 'lowercase' ? 'lowercase' : 'none'};
              }
            }
          `;
                }
            });
        }

        styleElement.textContent = css;
    }, [config]);

    return null;
}