import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars vehicle' })
export default class Vehicle {
    @Field(() => String, { description: 'Name of the vehicle' })
    public name!: string;

    @Field(() => String, { description: 'Model of the vehicle' })
    public model!: string;

    @Field(() => String, { description: 'Manufacturer of the vehicle' })
    public manufacturer!: string;

    @Field(() => String, { description: 'Cost in credits of the vehicle' })
    public cost_in_credits!: string;

    @Field(() => String, { description: 'Length the vehicle' })
    public length!: string;

    @Field(() => String, { description: 'Max speed in the atmosphere of the vehicle' })
    public max_atmosphering_speed!: string;

    @Field(() => String, { description: 'Number of personnel needed to run the vehicle' })
    public crew!: string;

    @Field(() => String, { description: 'Number of people the vehicle can transport' })
    public passengers!: string;

    @Field(() => String, { description: 'Maximum weight of cargo the vehicle can transport' })
    public cargo_capacity!: string;

    @Field(() => String, {
        description:
            'The maximum length of time that the vehicle can provide consumables for its entire crew without having to resupply'
    })
    public consumables!: string;

    @Field(() => String, { description: 'Class of the vehicle' })
    public vehicle_class!: string;

    @Field(() => [String], { description: 'Known people that piloted the vehicle' })
    public pilots!: string[];

    @Field(() => [String], { description: 'Films that the vehicle occurred in' })
    public films!: string[];
}
