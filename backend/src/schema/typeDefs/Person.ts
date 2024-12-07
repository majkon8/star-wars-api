import { Field, ObjectType } from 'type-graphql';

import Film from '@/schema/typeDefs/Film';
import Starship from '@/schema/typeDefs/Starship';
import Vehicle from '@/schema/typeDefs/Vehicle';
import Species from '@/schema/typeDefs/Species';

@ObjectType({ description: 'A Star Wars person' })
export default class Person {
    @Field(() => String, { description: 'The name of this person.' })
    public name!: string;

    @Field(() => String, { description: 'The height of the person in centimeters.' })
    public height!: string;

    @Field(() => String, { description: 'The mass of the person in kilograms.' })
    public mass!: string;

    @Field(() => String, {
        description:
            'The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.'
    })
    public hair_color!: string;

    @Field(() => String, { description: 'The skin color of this person.' })
    public skin_color!: string;

    @Field(() => String, {
        description:
            'The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.'
    })
    public eye_color!: string;

    @Field(() => String, {
        description:
            'The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.'
    })
    public birth_year!: string;

    @Field(() => String, {
        description:
            'The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.'
    })
    public gender!: string;

    @Field(() => String, {
        description: 'The URL of a planet resource, a planet that this person was born on or inhabits.'
    })
    public homeworld!: string;

    @Field(() => [Film], { description: 'An array of films that this person has been in.' })
    public films!: string[];

    @Field(() => [Species], { description: 'An array of species that this person belongs to.' })
    public species!: string[];

    @Field(() => [Vehicle], { description: 'An array of vehicles that this person has piloted.' })
    public vehicles!: string[];

    @Field(() => [Starship], { description: 'An array of starships that this person has piloted.' })
    public starships!: string[];
}
