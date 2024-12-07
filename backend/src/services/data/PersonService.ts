import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class PersonService {
    constructor() {}

    async getAll() {
        const {
            data: { results: people }
        } = await axios.get('/people');

        return people;
    }

    async getOne(id: number) {
        const { data: person } = await axios.get(`/people/${id}`);

        return person;
    }
}
