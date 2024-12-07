import { Field, ObjectType } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import Person from '@/schema/typeDefs/Person';

@ObjectType({ description: 'A Star Wars species' })
export default class Species {
    @Field(() => String, { description: 'The name of this species.' })
    public name!: string;

    @Field(() => String, { description: 'The classification of this species, such as "mammal" or "reptile".' })
    public classification!: string;

    @Field(() => String, { description: 'The designation of this species, such as "sentient".' })
    public designation!: string;

    @Field(() => String, { description: 'The average height of this species in centimeters.' })
    public average_height!: string;

    @Field(() => String, {
        description:
            'A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.'
    })
    public skin_colors!: string;

    @Field(() => String, {
        description:
            'A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.'
    })
    public hair_colors!: string;

    @Field(() => String, {
        description:
            'A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.'
    })
    public eye_colors!: string;

    @Field(() => String, { description: 'The average lifespan of this species in years.' })
    public average_lifespan!: string;

    @Field(() => String, { description: 'The URL of a planet resource, a planet that this species originates from.' })
    public homeworld!: string;

    @Field(() => String, { description: 'The language commonly spoken by this species.' })
    public language!: string;

    @Field(() => [Person], { description: 'An array of people that are a part of this species.' })
    public people!: string[];

    @Field(() => [Film], { description: 'An array of films that this species has appeared in.' })
    public films!: string[];
}
