/* eslint-disable @typescript-eslint/no-unused-vars */
import Language from '../enums/language.js';
import type { Options } from './options.js';

export interface EverythingOptions extends Options {
    q: string;
    searchIn: SearchIn;
    sources: string;
    domains: string;
    excludeDomains: string;
    from: string;
    to: string;
    language: Language;
    sortBy: SortBy;
    pageSize: number;
    page: number;
}

const SORT_BY = {
    Relevancy: 'relevancy',
    Popularity: 'popularity',
    PublishedAt: 'publishedAt',
} as const;

type SortBy = (typeof SORT_BY)[keyof typeof SORT_BY];

const SEARCH_IN = {
    Title: 'title',
    Description: 'description',
    Content: 'content',
} as const;

type SearchIn = (typeof SEARCH_IN)[keyof typeof SEARCH_IN];
