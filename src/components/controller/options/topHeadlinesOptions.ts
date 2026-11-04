import Options from './options';
import { Category } from '../consts';

interface TopHeadlinesOptions extends Options {
    country: 'us';
    category: Category;
    sources: string;
    q: string;
    pageSize: number;
    page: number;
}

export default TopHeadlinesOptions;
