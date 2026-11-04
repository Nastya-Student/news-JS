import type { ArticleItem } from './articleItem.js';
import type { CommonResponse } from './commonResponse.js';

export interface ArticlesResponse extends CommonResponse {
    totalResults: number;
    articles: ArticleItem[];
}
