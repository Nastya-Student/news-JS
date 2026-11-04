import Country from '../enums/country';
import Language from '../enums/language';
import Options from './options';
import { Category } from '../consts';

interface SourcesOptions extends Options {
    category: Category;
    language: Language;
    country: Country;
}

export default SourcesOptions;
