import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Starship from '@/schema/typeDefs/Starship';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Starship)
export default class StarshipResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Starship], {
        description: 'Gets all starships of all Star Wars films'
    })
    public async allStarships(): Promise<[Starship]> {
        const starships = await this.dataService.getAll('starships');

        return starships;
    }

    @Query(() => Starship, {
        description: 'Gets one Star Wars starship by ID'
    })
    public async starship(@Arg('id') id: number): Promise<Starship> {
        const starship = await this.dataService.getOne('starships', id);

        return starship;
    }
}
