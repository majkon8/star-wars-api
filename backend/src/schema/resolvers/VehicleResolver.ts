import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import { AllVehicles, Vehicle } from '@/schema/typeDefs/Vehicle';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Vehicle)
export default class VehicleResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => AllVehicles, {
        description: 'Gets all vehicles of all Star Wars films'
    })
    public async allVehicles(@Arg('page') page: number): Promise<AllVehicles> {
        const vehicles = await this.dataService.getAll(Resource.Vehicles, page);

        return vehicles;
    }

    @Query(() => Vehicle, {
        description: 'Gets one Star Wars vehicle by ID'
    })
    public async vehicle(@Arg('id') id: number): Promise<Vehicle> {
        const vehicle = await this.dataService.getOne(Resource.Vehicles, id);

        return vehicle;
    }

    @FieldResolver()
    async pilots(@Root() vehicle: Vehicle) {
        return this.dataService.getAdditionalData(vehicle.pilots, Resource.People);
    }

    @FieldResolver()
    async films(@Root() vehicle: Vehicle) {
        return this.dataService.getAdditionalData(vehicle.films, Resource.Films);
    }
}
