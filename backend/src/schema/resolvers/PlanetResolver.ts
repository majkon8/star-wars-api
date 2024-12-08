import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import Planet from '@/schema/typeDefs/Planet';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Planet)
export default class PlanetResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Planet], {
        description: 'Gets all planets of all Star Wars films'
    })
    public async allPlanets(): Promise<[Planet]> {
        const planets = await this.dataService.getAll(Resource.Planets);

        return planets;
    }

    @Query(() => Planet, {
        description: 'Gets one Star Wars planet by ID'
    })
    public async planet(@Arg('id') id: number): Promise<Planet> {
        const planet = await this.dataService.getOne(Resource.Planets, id);

        return planet;
    }

    @FieldResolver()
    async residents(@Root() planet: Planet) {
        return this.dataService.getAdditionalData(planet.residents, Resource.People);
    }

    @FieldResolver()
    async films(@Root() planet: Planet) {
        return this.dataService.getAdditionalData(planet.films, Resource.Films);
    }
}
