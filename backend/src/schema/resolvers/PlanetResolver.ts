import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

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
        const planets = await this.dataService.getAll('planets');

        return planets;
    }

    @Query(() => Planet, {
        description: 'Gets one Star Wars planet by ID'
    })
    public async planet(@Arg('id') id: number): Promise<Planet> {
        const planet = await this.dataService.getOne('planets', id);

        return planet;
    }
}
