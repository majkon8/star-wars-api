import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class VehicleService {
    constructor() {}

    async getAll() {
        const {
            data: { results: vehicles }
        } = await axios.get('/vehicles');

        return vehicles;
    }

    async getOne(id: number) {
        const { data: vehicle } = await axios.get(`/vehicles/${id}`);

        return vehicle;
    }
}
