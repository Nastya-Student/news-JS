export const ENDPOINT = {
    Everything: 'everything',
    TopHeadlines: 'top-headlines',
    Sources: 'sources',
} as const;

export type Endpoint = (typeof ENDPOINT)[keyof typeof ENDPOINT];
