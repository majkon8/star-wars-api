import { Field, ObjectType } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import Person from '@/schema/typeDefs/Person';

@ObjectType({ description: 'A Star Wars planet' })
export default class Planet {
    @Field(() => String, { description: 'The name of this planet.' })
    public name!: string;

    @Field(() => String, {
        description: 'The number of standard hours it takes for this planet to complete a single rotation on its axis.'
    })
    public rotation_period!: string;

    @Field(() => String, {
        description:
            'The number of standard days it takes for this planet to complete a single orbit of its local star.'
    })
    public orbital_period!: string;

    @Field(() => String, { description: 'The diameter of this planet in kilometers.' })
    public diameter!: string;

    @Field(() => String, { description: 'The climate of this planet. Comma separated if diverse.' })
    public climate!: string;

    @Field(() => String, {
        description:
            'A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.'
    })
    public gravity!: string;

    @Field(() => String, { description: 'The terrain of this planet. Comma separated if diverse.' })
    public terrain!: string;

    @Field(() => String, {
        description: 'The percentage of the planet surface that is naturally occurring water or bodies of water.'
    })
    public surface_water!: string;

    @Field(() => String, { description: 'The average population of sentient beings inhabiting this planet.' })
    public population!: string;

    @Field(() => [Person], { description: 'An array of people that live on this planet.' })
    public residents!: string[];

    @Field(() => [Film], { description: 'An array of films that this planet has appeared in.' })
    public films!: string[];
}
