import type { ArticlesResponse } from '../responses/articlesResponse.js';
import type { DataSources } from '../responses/sourcesResponse.js';
import AppLoader from './appLoader.js';
import { ENDPOINT } from './consts/endpoints.js';
import type { EverythingOptions } from './options/everythingOptions.js';

export class AppController extends AppLoader {
    public getSources(callback: (data: DataSources) => void) {
        super.getResp(
            {
                endpoint: ENDPOINT.Sources,
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
                            endpoint: ENDPOINT.Everything,
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
