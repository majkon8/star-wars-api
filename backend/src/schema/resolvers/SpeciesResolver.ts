import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import Species from '@/schema/typeDefs/Species';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Species)
export default class SpeciesResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Species], {
        description: 'Gets all species of all Star Wars films'
    })
    public async allSpecies(): Promise<[Species]> {
        const species = await this.dataService.getAll(Resource.Species);

        return species;
    }

    @Query(() => Species, {
        description: 'Gets one Star Wars species by ID'
    })
    public async species(@Arg('id') id: number): Promise<Species> {
        const species = await this.dataService.getOne(Resource.Species, id);

        return species;
    }

    @FieldResolver()
    async people(@Root() species: Species) {
        return this.dataService.getAdditionalData(species.people, Resource.People);
    }

    @FieldResolver()
    async films(@Root() species: Species) {
        return this.dataService.getAdditionalData(species.films, Resource.Films);
    }
}
