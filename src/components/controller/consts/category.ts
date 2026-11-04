export const CATEGORY = {
    Business: 'business',
    Entertainment: 'entertainment',
    General: 'general',
    Health: 'health',
    Science: 'science',
    Sports: 'sports',
    Technology: 'technology',
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];
