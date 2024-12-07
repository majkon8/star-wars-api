import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars starship' })
export default class Starship {
    @Field(() => String, { description: 'Name of the starship' })
    public name!: string;

    @Field(() => String, { description: 'Model of the starship' })
    public model!: string;

    @Field(() => String, { description: 'Manufacturer of the starship' })
    public manufacturer!: string;

    @Field(() => String, { description: 'Cost in credits of the starship' })
    public cost_in_credits!: string;

    @Field(() => String, { description: 'Length the starship' })
    public length!: string;

    @Field(() => String, { description: 'Max speed in the atmosphere of the starship' })
    public max_atmosphering_speed!: string;

    @Field(() => String, { description: 'Number of personnel needed to run the starship' })
    public crew!: string;

    @Field(() => String, { description: 'Number of people the starship can transport' })
    public passengers!: string;

    @Field(() => String, { description: 'Maximum weight of cargo the starship can transport' })
    public cargo_capacity!: string;

    @Field(() => String, {
        description:
            'The maximum length of time that the starship can provide consumables for its entire crew without having to resupply'
    })
    public consumables!: string;

    @Field(() => String, { description: 'The class of the starships hyperdrive' })
    public hyperdrive_rating!: string;

    @Field(() => String, {
        description: 'The maximum number of Megalights the starship can travel in a standard hour.'
    })
    public MGLT!: string;

    @Field(() => String, { description: 'Class of the starship' })
    public starship_class!: string;

    @Field(() => [String], { description: 'Known people that piloted the starship' })
    public pilots!: string[];

    @Field(() => [String], { description: 'Films that the starship occurred in' })
    public films!: string[];
}
