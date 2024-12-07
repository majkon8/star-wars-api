import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Vehicle from '@/schema/typeDefs/Vehicle';
import { VehicleService } from '@/services/data/VehicleService';

@Service()
@Resolver(Vehicle)
export default class VehicleResolver {
    constructor(private readonly vehicleService: VehicleService) {}
    @Query(() => [Vehicle], {
        description: 'Gets all vehicles of all Star Wars films'
    })
    public async allVehicles(): Promise<[Vehicle]> {
        const vehicles = await this.vehicleService.getAll();

        return vehicles;
    }

    @Query(() => Vehicle, {
        description: 'Gets one Star Wars vehicle by ID'
    })
    public async vehicle(@Arg('id') id: number): Promise<Vehicle> {
        const vehicle = await this.vehicleService.getOne(id);

        return vehicle;
    }
}
