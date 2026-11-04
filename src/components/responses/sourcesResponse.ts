import CommonResponse from './commonResponse';
import SourcesItem from './sourcesItem';

interface DataSources extends CommonResponse {
    sources: SourcesItem[];
}

export default DataSources;
