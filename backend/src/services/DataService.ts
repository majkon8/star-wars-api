import axios from 'axios';
import { Service } from 'typedi';

import { Resource } from '@/types/resources';
import Person from '@/schema/typeDefs/Person';

@Service()
export class DataService {
    constructor() {}

    async getAll(resource: Resource) {
        const {
            data: { results }
        } = await axios.get(`/${resource}`);

        return results;
    }

    async getOne(resource: Resource, id: number) {
        const { data } = await axios.get(`/${resource}/${id}`);

        return data;
    }

    async getAdditionalData(urls: string[], resource: Resource) {
        if (!urls) {
            return;
        }

        const ids = urls.map(characterUrl => {
            const urlParts = characterUrl.split('/');
            const id = urlParts.pop() || urlParts.pop();

            return id;
        }) as string[];

        if (!ids.length) {
            return [];
        }

        const additionalData = await this.getMany(resource, ids);

        return additionalData;
    }

    private async getMany(resource: Resource, ids: string[]): Promise<Person[]> {
        const requests = ids.map(id => this.getOne(resource, +id));

        // for (const id of ids) {
        //     console.log(resource);
        //     console.log(+id);
        // }

        const data = await Promise.all(requests);

        return data;
    }
}
