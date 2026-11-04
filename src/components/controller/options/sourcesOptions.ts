import Country from '../enums/country.js';
import Language from '../enums/language.js';
import type { Options } from './options.js';
import type { Category } from '../consts.js';

export interface SourcesOptions extends Options {
    category: Category;
    language: Language;
    country: Country;
}
