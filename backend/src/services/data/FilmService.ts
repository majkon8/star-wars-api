import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class FilmService {
    constructor() {}

    async getAll() {
        const {
            data: { results: films }
        } = await axios.get('/films');

        return films;
    }

    async getOne(episode: number) {
        const { data: film } = await axios.get(`/films/${episode}`);

        return film;
    }
}
