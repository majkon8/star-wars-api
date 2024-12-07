import axios from 'axios';
import { Service } from 'typedi';

import { Resource } from '@/types/resources';

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
}
