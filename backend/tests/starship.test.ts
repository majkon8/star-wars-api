import 'reflect-metadata';

describe('Planet', () => {
    it('returns a starship by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                starship(id: 2) {
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
                    hyperdrive_rating,
                    MGLT,
                    starship_class,
                    pilots { name },
                    films { title },
                }
            }`
        });

        expect(response.body.data.starship.name).toBe('CR90 corvette');
        expect(response.body.data.starship.model).toBe('CR90 corvette');
        expect(response.body.data.starship.manufacturer).toBe('Corellian Engineering Corporation');
        expect(response.body.data.starship.cost_in_credits).toEqual('3500000');
        expect(response.body.data.starship.length).toEqual('150');
        expect(response.body.data.starship.max_atmosphering_speed).toEqual('950');
        expect(response.body.data.starship.crew).toEqual('30-165');
        expect(response.body.data.starship.passengers).toEqual('600');
        expect(response.body.data.starship.cargo_capacity).toEqual('3000000');
        expect(response.body.data.starship.consumables).toEqual('1 year');
        expect(response.body.data.starship.hyperdrive_rating).toEqual('2.0');
        expect(response.body.data.starship.MGLT).toEqual('60');
        expect(response.body.data.starship.starship_class).toEqual('corvette');
        expect(response.body.data.starship.pilots.length).toEqual(0);
        expect(response.body.data.starship.films.length).toEqual(3);
    });

    it('returns first page of starships', async () => {
        const response = await request.post('/').send({
            query: `query {
                allStarships(page: 1) {
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

        expect(response.body.data.allStarships.data[0].name).toEqual('CR90 corvette');
        expect(response.body.data.allStarships.data.length).toEqual(10);
        expect(response.body.data.allStarships.pagination.nextPage).toEqual(true);
        expect(response.body.data.allStarships.pagination.previousPage).toEqual(false);
        expect(response.body.data.allStarships.pagination.total).toEqual(36);
    });
});
