import type { CommonResponse } from './commonResponse.js';
import type { SourcesItem } from './sourcesItem.js';

export interface DataSources extends CommonResponse {
    sources: SourcesItem[];
}
