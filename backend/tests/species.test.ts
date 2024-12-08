import 'reflect-metadata';

describe('Planet', () => {
    it('returns a species by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                species(id: 1) {
                    name,
                    classification,
                    designation,
                    average_height,
                    skin_colors,
                    hair_colors,
                    eye_colors,
                    average_lifespan,
                    language,
                    homeworld { name },
                    people { name },
                    films { title },
                }
            }`
        });

        expect(response.body.data.species.name).toBe('Human');
        expect(response.body.data.species.classification).toBe('mammal');
        expect(response.body.data.species.designation).toBe('sentient');
        expect(response.body.data.species.average_height).toEqual('180');
        expect(response.body.data.species.skin_colors).toEqual('caucasian, black, asian, hispanic');
        expect(response.body.data.species.hair_colors).toEqual('blonde, brown, black, red');
        expect(response.body.data.species.eye_colors).toEqual('brown, blue, green, hazel, grey, amber');
        expect(response.body.data.species.average_lifespan).toEqual('120');
        expect(response.body.data.species.language).toEqual('Galactic Basic');
        expect(response.body.data.species.homeworld.name).toEqual('Coruscant');
        expect(response.body.data.species.people.length).toEqual(4);
        expect(response.body.data.species.films.length).toEqual(6);
    });

    it('returns first page of species', async () => {
        const response = await request.post('/').send({
            query: `query {
                allSpecies(page: 1) {
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

        expect(response.body.data.allSpecies.data[0].name).toEqual('Human');
        expect(response.body.data.allSpecies.data.length).toEqual(10);
        expect(response.body.data.allSpecies.pagination.nextPage).toEqual(true);
        expect(response.body.data.allSpecies.pagination.previousPage).toEqual(false);
        expect(response.body.data.allSpecies.pagination.total).toEqual(37);
    });
});
