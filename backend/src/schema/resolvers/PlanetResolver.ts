import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Planet from '@/schema/typeDefs/Planet';
import { PlanetService } from '@/services/data/PlanetService';

@Service()
@Resolver(Planet)
export default class PlanetResolver {
    constructor(private readonly planetService: PlanetService) {}
    @Query(() => [Planet], {
        description: 'Gets all planets of all Star Wars films'
    })
    public async allPlanets(): Promise<[Planet]> {
        const planets = await this.planetService.getAll();

        return planets;
    }

    @Query(() => Planet, {
        description: 'Gets one Star Wars planet by ID'
    })
    public async planet(@Arg('id') id: number): Promise<Planet> {
        const planet = await this.planetService.getOne(id);

        return planet;
    }
}
