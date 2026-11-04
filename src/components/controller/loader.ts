import CommonResponse from '../responses/commonResponse';
import Endpoint from './enums/endpoints';
import Options from './options/options';

class Loader {
    private _baseLink: string;
    private _options: Options;

    constructor(baseLink: string, options: Options) {
        this._baseLink = baseLink;
        this._options = options;
    }

    protected get options(): Options {
        return this._options;
    }

    protected getResp<T extends Options, K extends CommonResponse>(
        endpointProperties: EndpointClass<T>,
        callback: (data: K) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T, K>('GET', endpointProperties.endpoint ?? '', callback, endpointProperties.options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl<T extends Options>(options?: Partial<T>, endpoint?: Endpoint) {
        let urlOptions = this._options;
        if (options !== undefined) {
            urlOptions = { ...this._options, ...options };
        }
        let url = `${this._baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]) => {
            url += `${key}=${value}&`;
        });

        return url.slice(0, -1);
    }

    private load<T extends Options, K extends CommonResponse>(
        method: string,
        endpoint: Endpoint,
        callback: (data: K) => void,
        options?: Partial<T>
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;

interface EndpointClass<T extends Options> {
    endpoint: Endpoint;
    options?: Partial<T>;
}
