import type { Country } from '../consts/country.js';
import type { Language } from '../consts/language.js';
import type { Options } from './options.js';
import type { Category } from '../consts/category.js';

export interface SourcesOptions extends Options {
    category: Category;
    language: Language;
    country: Country;
}
