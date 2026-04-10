import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('admin_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            console.error('API Error:', error.response.data);
            throw new Error(error.response.data.message || 'Something went wrong');
        } else if (error.request) {
            console.error('No response from server:', error.request);
            throw new Error('Cannot connect to server. Please check if backend is running.');
        } else {
            console.error('Error:', error.message);
            throw error;
        }
    }
);

// Site Config API
export const siteConfigAPI = {
    getAllConfigs: () => apiClient.get('/site-config'),

    getConfigByKey: (key) => apiClient.get(`/site-config/${key}`),

    updateConfigs: (configs) => apiClient.post('/site-config/batch', { configs }),

    setConfig: (configData) => apiClient.post('/site-config', configData),

    deleteConfig: (key) => apiClient.delete(`/site-config/${key}`),

    // CSS Variables methods
    getCssVariables: () => apiClient.get('/site-config/css-variables'),
    
    updateCssVariables: (cssVariables) => apiClient.put('/site-config/css-variables', { cssVariables }),
};

// Fetch only CSS variables from backend (simple version)
export const fetchCssVariables = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/site-config/css-variables`);
        const result = await response.json();
        
        if (result.success && result.data) {
            console.log('🎨 CSS Variables from API:', result.data);
            return result.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching CSS variables:', error);
        return null;
    }
};

// Your existing fetchSiteContent function
export const fetchSiteContent = async () => {
    try {
        const res = await fetch(
            "https://brandspine-server.onrender.com/api/brand-config/site-config/export",
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                },
                cache: "no-store",
            },
        );

        const data = await res.json();
        console.log("data", data);
        return data;
    } catch (err) {
        console.error("API failed, using static JSON");
        return null;
    }
};

// Add contact form API functions
export const contactAPI = {
    submitContactForm: async (formData, description) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData, description }),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error submitting contact form:', error);
            throw error;
        }
    },
};

// Page APIs for CMS
export const pageAPI = {
    getAllPages: () => apiClient.get('/pages'),
    getPageBySlug: (slug) => apiClient.get(`/pages/${slug}`),
    updatePage: (slug, pageData) => apiClient.put(`/pages/${slug}`, pageData),
    updateSection: (slug, sectionId, sectionData) =>
        apiClient.put(`/pages/${slug}/sections/${sectionId}`, sectionData),
    updateField: (slug, sectionId, fieldId, value) =>
        apiClient.put(`/pages/${slug}/sections/${sectionId}/fields/${fieldId}`, { value }),
    createPage: (pageData) => apiClient.post('/pages', pageData),
    deletePage: (slug) => apiClient.delete(`/pages/${slug}`),
};

// Auth API
export const authAPI = {
    login: async (email, password) => {
        try {
            const response = await apiClient.post('/users/login', { email, password });
            return response;
        } catch (error) {
            throw error;
        }
    },
    logout: () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
    },
    getCurrentUser: () => apiClient.get('/users/me'),
    register: (userData) => apiClient.post('/users/register', userData),
    updateProfile: (profileData) => apiClient.put('/users/profile', profileData),
    changePassword: (currentPassword, newPassword) =>
        apiClient.put('/users/change-password', { currentPassword, newPassword }),
};

// Media API
export const mediaAPI = {
    uploadMedia: async (file, metadata = {}) => {
        const formData = new FormData();
        formData.append('file', file);
        if (metadata.alt) formData.append('alt', metadata.alt);
        if (metadata.title) formData.append('title', metadata.title);
        if (metadata.folder) formData.append('folder', metadata.folder);
        if (metadata.tags) formData.append('tags', metadata.tags.join(','));

        const token = localStorage.getItem('admin_token');

        const response = await axios.post(`${API_BASE_URL}/media/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    },
    getAllMedia: (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiClient.get(`/media${queryString ? `?${queryString}` : ''}`);
    },
    getMediaById: (id) => apiClient.get(`/media/${id}`),
    updateMedia: (id, data) => apiClient.put(`/media/${id}`, data),
    deleteMedia: (id) => apiClient.delete(`/media/${id}`),
    bulkDeleteMedia: (ids) => apiClient.post('/media/bulk-delete', { ids }),
    getMediaStats: () => apiClient.get('/media/stats'),
};

export default apiClient;