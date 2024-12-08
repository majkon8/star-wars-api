import 'reflect-metadata';

describe('Films', () => {
    it('returns a film by ID with all data', async () => {
        const response = await request.post('/').send({
            query: `query {
                film(episode: 3) {
                    title,
                    episode_id,
                    opening_crawl,
                    director,
                    producer,
                    release_date,
                    characters { height },
                    planets { gravity },
                    starships { crew },
                    vehicles { model },
                    species { average_lifespan }
                }
            }`
        });

        expect(response.body.data.film.title).toBe('Return of the Jedi');
        expect(response.body.data.film.episode_id).toBe(6);
        expect(response.body.data.film.opening_crawl).toBe(
            'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...'
        );
        expect(response.body.data.film.director).toEqual('Richard Marquand');
        expect(response.body.data.film.producer).toEqual('Howard G. Kazanjian, George Lucas, Rick McCallum');
        expect(response.body.data.film.release_date).toEqual('1983-05-25');
        expect(response.body.data.film.characters.length).toEqual(20);
        expect(response.body.data.film.planets.length).toEqual(5);
        expect(response.body.data.film.starships.length).toEqual(12);
        expect(response.body.data.film.vehicles.length).toEqual(8);
        expect(response.body.data.film.species.length).toEqual(9);
        expect(response.body.data.film.characters[0]).toHaveProperty('height');
        expect(response.body.data.film.planets[0]).toHaveProperty('gravity');
        expect(response.body.data.film.starships[0]).toHaveProperty('crew');
        expect(response.body.data.film.vehicles[0]).toHaveProperty('model');
        expect(response.body.data.film.species[0]).toHaveProperty('average_lifespan');
    });

    it('returns a different film by ID', async () => {
        const response = await request.post('/').send({
            query: `query {
                film(episode: 2) { title }
            }`
        });

        expect(response.body.data.film.title).toBe('The Empire Strikes Back');
    });

    it('returns all films', async () => {
        const response = await request.post('/').send({
            query: `query {
                allFilms {
                    title
                }
            }`
        });

        expect(response.body.data.allFilms.length).toEqual(6);
    });

    it('returns unique words and their count', async () => {
        const response = await request.post('/').send({
            query: `query {
                uniqueWords {
                    count,
                    word
                }
            }`
        });

        expect(response.body.data.uniqueWords.length).toEqual(245);
        expect(response.body.data.uniqueWords[0]).toHaveProperty('count');
        expect(response.body.data.uniqueWords[0]).toHaveProperty('word');
    });

    it('returns error for non existing film ID', async () => {
        const response = await request.post('/').send({
            query: `query {
                film(episode: 0) { title }
            }`
        });

        expect(response.body).toHaveProperty('errors');
    });
});
