import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import { DataService } from '@/services/DataService';
import { AllPlanets, Planet } from '@/schema/typeDefs/Planet';

@Service()
@Resolver(Planet)
export default class PlanetResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => AllPlanets, {
        description: 'Gets all planets of all Star Wars films'
    })
    public async allPlanets(@Arg('page') page: number): Promise<AllPlanets> {
        const planets = await this.dataService.getAll(Resource.Planets, page);

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
