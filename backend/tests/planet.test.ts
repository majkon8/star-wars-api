import 'reflect-metadata';

describe('Planet', () => {
    it('returns a planet by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                planet(id: 1) {
                    name,
                    rotation_period,
                    orbital_period,
                    diameter,
                    climate,
                    gravity,
                    terrain,
                    surface_water,
                    population,
                    residents { name },
                    films { title },
                   
                }
            }`
        });

        expect(response.body.data.planet.name).toBe('Tatooine');
        expect(response.body.data.planet.rotation_period).toBe('23');
        expect(response.body.data.planet.orbital_period).toBe('304');
        expect(response.body.data.planet.diameter).toEqual('10465');
        expect(response.body.data.planet.climate).toEqual('arid');
        expect(response.body.data.planet.gravity).toEqual('1 standard');
        expect(response.body.data.planet.terrain).toEqual('desert');
        expect(response.body.data.planet.surface_water).toEqual('1');
        expect(response.body.data.planet.population).toEqual('200000');
        expect(response.body.data.planet.residents.length).toEqual(10);
        expect(response.body.data.planet.films.length).toEqual(5);
    });

    it('returns first page of planets', async () => {
        const response = await request.post('/').send({
            query: `query {
                allPlanets(page: 1) {
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

        expect(response.body.data.allPlanets.data[0].name).toEqual('Tatooine');
        expect(response.body.data.allPlanets.data.length).toEqual(10);
        expect(response.body.data.allPlanets.pagination.nextPage).toEqual(true);
        expect(response.body.data.allPlanets.pagination.previousPage).toEqual(false);
        expect(response.body.data.allPlanets.pagination.total).toEqual(60);
    });
});
