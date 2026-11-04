import type { Options } from './options.js';
import type { Category } from '../consts/category.js';

export interface TopHeadlinesOptions extends Options {
    country: 'us';
    category: Category;
    sources: string;
    q: string;
    pageSize: number;
    page: number;
}
