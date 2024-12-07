import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Vehicle from '@/schema/typeDefs/Vehicle';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Vehicle)
export default class VehicleResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Vehicle], {
        description: 'Gets all vehicles of all Star Wars films'
    })
    public async allVehicles(): Promise<[Vehicle]> {
        const vehicles = await this.dataService.getAll('vehicles');

        return vehicles;
    }

    @Query(() => Vehicle, {
        description: 'Gets one Star Wars vehicle by ID'
    })
    public async vehicle(@Arg('id') id: number): Promise<Vehicle> {
        const vehicle = await this.dataService.getOne('vehicles', id);

        return vehicle;
    }
}
