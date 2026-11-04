import './sources.css';
import type { SourcesItem } from '../../responses/sourcesItem.js';

class Sources {
    public draw(data: SourcesItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            const name = sourceClone.querySelector<HTMLSpanElement>('.source__item-name');
            const id = sourceClone.querySelector<HTMLDivElement>('.source__item');

            if (name) {
                name.textContent = item.name;
            }

            if (id) {
                id.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sources = document.querySelector<HTMLDivElement>('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
