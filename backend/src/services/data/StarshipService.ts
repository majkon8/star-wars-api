import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class StarshipService {
    constructor() {}

    async getAll() {
        const {
            data: { results: starships }
        } = await axios.get('/starships');

        return starships;
    }

    async getOne(id: number) {
        const { data: starship } = await axios.get(`/starships/${id}`);

        return starship;
    }
}
