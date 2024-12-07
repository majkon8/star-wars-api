import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

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
}
