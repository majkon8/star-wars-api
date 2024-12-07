import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class PlanetService {
    constructor() {}

    async getAll() {
        const {
            data: { results: planets }
        } = await axios.get('/planets');

        return planets;
    }

    async getOne(id: number) {
        const { data: planet } = await axios.get(`/planets/${id}`);

        return planet;
    }
}
