import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class SpeciesService {
    constructor() {}

    async getAll() {
        const {
            data: { results: species }
        } = await axios.get('/species');

        return species;
    }

    async getOne(id: number) {
        const { data: species } = await axios.get(`/species/${id}`);

        return species;
    }
}
