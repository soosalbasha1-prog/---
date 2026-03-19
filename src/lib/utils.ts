// Utility functions

// Function to generate user ID
export const generateUserID = (): string => {
    return 'user-' + Math.random().toString(36).substr(2, 9);
};

// Function to get user ID from localStorage
export const getUserIDFromLocalStorage = (): string | null => {
    return localStorage.getItem('userID');
};

// Function to format time ago
export const formatTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + ' years ago';
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + ' months ago';
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + ' days ago';
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + ' hours ago';
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + ' minutes ago';
    return seconds + ' seconds ago';
};

// ClassName utility function
export const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};
