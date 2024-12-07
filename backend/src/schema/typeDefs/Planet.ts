import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars planet' })
export default class Planet {
    @Field(() => String, { description: 'Name of the planet' })
    public name!: string;

    @Field(() => String, {
        description: 'The number of standard hours it takes for the planet to complete a single rotation on its axis'
    })
    public rotation_period!: string;

    @Field(() => String, {
        description: 'The number of standard days it takes for the planet to complete a single orbit of its local star'
    })
    public orbital_period!: string;

    @Field(() => String, { description: 'Diameter of the planet' })
    public diameter!: string;

    @Field(() => String, { description: 'Climate of the planet' })
    public climate!: string;

    @Field(() => String, { description: 'Gravity force of the planet' })
    public gravity!: string;

    @Field(() => String, { description: 'Terrain of the planet' })
    public terrain!: string;

    @Field(() => String, {
        description: 'The percentage of the planet surface that is naturally occurring water or bodies of water'
    })
    public surface_water!: string;

    @Field(() => String, { description: 'The average population of sentient beings inhabiting this planet' })
    public population!: string;

    @Field(() => [String], { description: 'Residents of the planet' })
    public residents!: string[];

    @Field(() => [String], { description: 'Films the planet appeared in' })
    public films!: string[];
}
