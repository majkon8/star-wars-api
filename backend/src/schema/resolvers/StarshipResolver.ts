import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import { DataService } from '@/services/DataService';
import { AllStarships, Starship } from '@/schema/typeDefs/Starship';

@Service()
@Resolver(Starship)
export default class StarshipResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => AllStarships, {
        description: 'Gets all starships of all Star Wars films'
    })
    public async allStarships(@Arg('page') page: number): Promise<AllStarships> {
        const starships = await this.dataService.getAll(Resource.Starships, page);

        return starships;
    }

    @Query(() => Starship, {
        description: 'Gets one Star Wars starship by ID'
    })
    public async starship(@Arg('id') id: number): Promise<Starship> {
        const starship = await this.dataService.getOne(Resource.Starships, id);

        return starship;
    }

    @FieldResolver()
    async pilots(@Root() starship: Starship) {
        return this.dataService.getAdditionalData(starship.pilots, Resource.People);
    }

    @FieldResolver()
    async films(@Root() starship: Starship) {
        return this.dataService.getAdditionalData(starship.films, Resource.Films);
    }
}
