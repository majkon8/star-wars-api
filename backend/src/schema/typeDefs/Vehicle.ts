import { Field, ObjectType } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import { Person } from '@/schema/typeDefs/Person';
import Pagination from '@/schema/typeDefs/Pagination';

@ObjectType({ description: 'A Star Wars vehicle' })
export class Vehicle {
    @Field(() => String, {
        description: 'The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".'
    })
    public name!: string;

    @Field(() => String, {
        description: 'The model or official name of this vehicle. Such as "All-Terrain Attack Transport".'
    })
    public model!: string;

    @Field(() => String, { description: 'The manufacturer of this vehicle. Comma separated if more than one.' })
    public manufacturer!: string;

    @Field(() => String, { description: 'The cost of this vehicle new, in Galactic Credits.' })
    public cost_in_credits!: string;

    @Field(() => String, { description: 'The length of this vehicle in meters.' })
    public length!: string;

    @Field(() => String, { description: 'The maximum speed of this vehicle in the atmosphere.' })
    public max_atmosphering_speed!: string;

    @Field(() => String, { description: 'The number of personnel needed to run or pilot this vehicle.' })
    public crew!: string;

    @Field(() => String, { description: 'The number of non-essential people this vehicle can transport.' })
    public passengers!: string;

    @Field(() => String, { description: 'The maximum number of kilograms that this vehicle can transport.' })
    public cargo_capacity!: string;

    @Field(() => String, {
        description:
            'The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.'
    })
    public consumables!: string;

    @Field(() => String, { description: 'The class of this vehicle, such as "Wheeled" or "Repulsorcraft".' })
    public vehicle_class!: string;

    @Field(() => [Person], { description: 'An array of people that this vehicle has been piloted by.' })
    public pilots!: string[];

    @Field(() => [Film], { description: 'An array of films that this vehicle has appeared in.' })
    public films!: string[];
}

@ObjectType({ description: 'Paginated vehicles data' })
export class AllVehicles {
    @Field(() => Pagination, {
        description: 'Pagination metadata'
    })
    public pagination!: Pagination;

    @Field(() => [Vehicle], {
        description: 'Vehicles data'
    })
    public data!: Vehicle[];
}
