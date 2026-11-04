import Loader from './loader';

const url = process.env.API_URL ?? '';
const key = process.env.API_KEY ?? '';

class AppLoader extends Loader {
    constructor() {
        super(url, {
            apiKey: key,
        });
    }
}

export default AppLoader;
