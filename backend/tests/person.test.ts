import 'reflect-metadata';

describe('Person', () => {
    it('returns a person by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                person(id: 1) {
                    name,
                    height,
                    mass,
                    hair_color,
                    skin_color,
                    eye_color,
                    birth_year,
                    gender,
                    homeworld { name },
                    films { title },
                    species { average_lifespan },
                    vehicles { crew },
                    starships { model },
                }
            }`
        });

        expect(response.body.data.person.name).toBe('Luke Skywalker');
        expect(response.body.data.person.height).toBe('172');
        expect(response.body.data.person.mass).toBe('77');
        expect(response.body.data.person.hair_color).toEqual('blond');
        expect(response.body.data.person.skin_color).toEqual('fair');
        expect(response.body.data.person.eye_color).toEqual('blue');
        expect(response.body.data.person.birth_year).toEqual('19BBY');
        expect(response.body.data.person.gender).toEqual('male');
        expect(response.body.data.person.homeworld.name).toEqual('Tatooine');
        expect(response.body.data.person.films.length).toEqual(4);
        expect(response.body.data.person.species.length).toEqual(0);
        expect(response.body.data.person.vehicles.length).toEqual(2);
        expect(response.body.data.person.starships.length).toEqual(2);
    });

    it('returns first page of people', async () => {
        const response = await request.post('/').send({
            query: `query {
                allPeople(page: 1) {
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

        expect(response.body.data.allPeople.data[0].name).toEqual('Luke Skywalker');
        expect(response.body.data.allPeople.data.length).toEqual(10);
        expect(response.body.data.allPeople.pagination.nextPage).toEqual(true);
        expect(response.body.data.allPeople.pagination.previousPage).toEqual(false);
        expect(response.body.data.allPeople.pagination.total).toEqual(82);
    });

    it('returns last page of people', async () => {
        const response = await request.post('/').send({
            query: `query {
                allPeople(page: 9) {
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

        expect(response.body.data.allPeople.data[0].name).toEqual('Sly Moore');
        expect(response.body.data.allPeople.data.length).toEqual(2);
        expect(response.body.data.allPeople.pagination.nextPage).toEqual(false);
        expect(response.body.data.allPeople.pagination.previousPage).toEqual(true);
        expect(response.body.data.allPeople.pagination.total).toEqual(82);
    });

    it('returns most mentioned character', async () => {
        const response = await request.post('/').send({
            query: `query {
                mostMentionedCharacters {
                    names
                }
            }`
        });

        expect(response.body.data.mostMentionedCharacters.names.length).toEqual(1);
        expect(response.body.data.mostMentionedCharacters.names[0]).toEqual('Luke Skywalker');
    });
});
