import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Film)
export default class FilmResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Film], {
        description: 'Gets all Star Wars films'
    })
    public async allFilms(): Promise<[Film]> {
        const films = await this.dataService.getAll('films');

        return films;
    }

    @Query(() => Film, {
        description: 'Gets one Star Wars film by episode number'
    })
    public async film(@Arg('episode') episode: number): Promise<Film> {
        const film = await this.dataService.getOne('films', episode);

        return film;
    }

    @FieldResolver()
    async characters(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.characters, 'people');
    }

    @FieldResolver()
    async planets(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.planets, 'planets');
    }

    @FieldResolver()
    async starships(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.starships, 'starships');
    }

    @FieldResolver()
    async vehicles(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.vehicles, 'vehicles');
    }

    @FieldResolver()
    async species(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.species, 'species');
    }
}
