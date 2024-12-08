import 'reflect-metadata';

describe('Planet', () => {
    it('returns a vehicle by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                vehicle(id: 4) {
                    name,
                    model,
                    manufacturer,
                    cost_in_credits,
                    length,
                    max_atmosphering_speed,
                    crew,
                    passengers,
                    cargo_capacity,
                    consumables,
                    vehicle_class,
                    pilots { name },
                    films { title },
                }
            }`
        });

        expect(response.body.data.vehicle.name).toBe('Sand Crawler');
        expect(response.body.data.vehicle.model).toBe('Digger Crawler');
        expect(response.body.data.vehicle.manufacturer).toBe('Corellia Mining Corporation');
        expect(response.body.data.vehicle.cost_in_credits).toEqual('150000');
        expect(response.body.data.vehicle.length).toEqual('36.8 ');
        expect(response.body.data.vehicle.max_atmosphering_speed).toEqual('30');
        expect(response.body.data.vehicle.crew).toEqual('46');
        expect(response.body.data.vehicle.passengers).toEqual('30');
        expect(response.body.data.vehicle.cargo_capacity).toEqual('50000');
        expect(response.body.data.vehicle.consumables).toEqual('2 months');
        expect(response.body.data.vehicle.vehicle_class).toEqual('wheeled');
        expect(response.body.data.vehicle.pilots.length).toEqual(0);
        expect(response.body.data.vehicle.films.length).toEqual(2);
    });

    it('returns first page of starships', async () => {
        const response = await request.post('/').send({
            query: `query {
                allVehicles(page: 1) {
                    data {
                        name,
                    },
                    pagination {
                        nextPage,
                        previousPage,
                        total
                    }
                }
            }`
        });

        expect(response.body.data.allVehicles.data[0].name).toEqual('Sand Crawler');
        expect(response.body.data.allVehicles.data.length).toEqual(10);
        expect(response.body.data.allVehicles.pagination.nextPage).toEqual(true);
        expect(response.body.data.allVehicles.pagination.previousPage).toEqual(false);
        expect(response.body.data.allVehicles.pagination.total).toEqual(39);
    });
});
