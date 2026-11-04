import News from './news/news';
import Sources from './sources/sources';
import ArticlesResponse from '../responses/articlesResponse';
import DataSources from '../responses/sourcesResponse';

export class AppView {
    private _news: News;
    private _sources: Sources;

    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    public drawNews(data: ArticlesResponse) {
        const values = data?.articles ?? [];
        this._news.draw(values);
    }

    public drawSources(data: DataSources) {
        const values = data?.sources ?? [];
        this._sources.draw(values);
    }
}

export default AppView;
