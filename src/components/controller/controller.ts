import ArticlesResponse from '../responses/articlesResponse';
import DataSources from '../responses/sourcesResponse';
import AppLoader from './appLoader';
import Endpoint from './enums/endpoints';
import EverythingOptions from './options/everythingOptions';

class AppController extends AppLoader {
    public getSources(callback: (data: DataSources) => void) {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: (data: ArticlesResponse) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId ?? '');
                    super.getResp<EverythingOptions, ArticlesResponse>(
                        {
                            endpoint: Endpoint.Everything,
                            options: { ...super.options, sources: sourceId?.toString() ?? '' },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
