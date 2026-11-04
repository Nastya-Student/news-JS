import ArticleItem from './articleItem';
import CommonResponse from './commonResponse';

interface ArticlesResponse extends CommonResponse {
    totalResults: number;
    articles: ArticleItem[];
}

export default ArticlesResponse;
