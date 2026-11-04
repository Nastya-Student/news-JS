import ArticleItem from '../../responses/articleItem';
import './news.css';

const NEWS_AMOUNT = 10;

class News {
    public draw(data: ArticleItem[]) {
        const news = data.length >= NEWS_AMOUNT ? data.filter((_item, idx) => idx < NEWS_AMOUNT) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

                if (idx % 2) {
                    const newsItem = newsClone.querySelector<HTMLElement>('.news__item');
                    if (newsItem) {
                        newsItem.classList.add('alt');
                    }
                }

                const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');
                const author = newsClone.querySelector<HTMLElement>('.news__meta-author');
                const date = newsClone.querySelector<HTMLElement>('.news__meta-date');
                const title = newsClone.querySelector<HTMLElement>('.news__description-title');
                const source = newsClone.querySelector<HTMLElement>('.news__description-source');
                const content = newsClone.querySelector<HTMLElement>('.news__description-content');
                const readMore = newsClone.querySelector<HTMLElement>('.news__read-more a');

                if (photo) {
                    photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                if (author) {
                    author.textContent = item.author || item.source.name;
                }

                if (date) {
                    date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                if (title) {
                    title.textContent = item.title;
                }

                if (source) {
                    source.textContent = item.source.name;
                }

                if (content) {
                    content.textContent = item.description;
                }

                if (readMore) {
                    readMore.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            });
        }

        this.renderUpButton(fragment);
    }

    private renderUpButton(fragment: DocumentFragment) {
        const newsElement = document.querySelector<HTMLElement>('.news');
        const upButton = document.createElement('div');
        upButton.textContent = '>>';
        upButton.classList.add('upButton');

        if (!newsElement) {
            return;
        }
        newsElement.innerHTML = '';
        newsElement.appendChild(upButton);
        newsElement.appendChild(fragment);

        upButton.addEventListener('click', () => {
            document.getElementById('buttons')?.scrollIntoView();
            upButton.remove();
        });
    }
}

export default News;
