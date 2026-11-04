interface ArticleItem {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface NewsSource {
    id: string | null;
    name: string;
}

export default ArticleItem;
