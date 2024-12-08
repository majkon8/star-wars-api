import { Service } from 'typedi';
import { Query, Resolver, FieldResolver, Root, Args } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import { Resource } from '@/enums/resources';
import { DataService } from '@/services/DataService';
import FilmArguments from '@/schema/arguments/FilmArgs';

@Service()
@Resolver(Film)
export default class FilmResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Film], {
        description: 'Gets all Star Wars films'
    })
    public async allFilms(): Promise<[Film]> {
        const films = await this.dataService.getAll(Resource.Films);

        return films;
    }

    @Query(() => Film, {
        description: 'Gets one Star Wars film by episode number'
    })
    public async film(@Args() args: FilmArguments): Promise<Film> {
        const film = await this.dataService.getOne(Resource.Films, args.episode);

        return film;
    }

    @FieldResolver()
    async characters(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.characters, Resource.People);
    }

    @FieldResolver()
    async planets(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.planets, Resource.Planets);
    }

    @FieldResolver()
    async starships(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.starships, Resource.Starships);
    }

    @FieldResolver()
    async vehicles(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.vehicles, Resource.Vehicles);
    }

    @FieldResolver()
    async species(@Root() film: Film) {
        return this.dataService.getAdditionalData(film.species, Resource.Species);
    }
}
