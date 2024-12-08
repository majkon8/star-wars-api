import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

import { Person } from '@/schema/typeDefs/Person';
import { Planet } from '@/schema/typeDefs/Planet';
import { Vehicle } from '@/schema/typeDefs/Vehicle';
import { Species } from '@/schema/typeDefs/Species';
import { Starship } from '@/schema/typeDefs/Starship';

@ObjectType({ description: 'A Star Wars film.' })
export class Film {
    @Field(() => String, { description: 'The title of this film.' })
    public title!: string;

    @Field(() => Int, { description: 'The episode number of this film.' })
    public episode_id!: number;

    @Field(() => String, { description: 'The opening paragraphs at the beginning of this film.' })
    public opening_crawl!: string;

    @Field(() => String, { description: 'The name of the director of this film.' })
    public director!: string;

    @Field(() => [String], { description: 'The name(s) of the producer(s) of this film. Comma separated.' })
    public producers!: string[];

    @Field(() => GraphQLISODateTime, {
        description: 'The ISO 8601 date format of film release at original creator country.'
    })
    public release_date!: Date;

    @Field(() => [Person], { description: 'An array of people that are in this film.' })
    public characters!: string[];

    @Field(() => [Planet], { description: 'An array of planets that are in this film.' })
    public planets!: string[];

    @Field(() => [Starship], { description: 'An array of starships that are in this film.' })
    public starships!: string[];

    @Field(() => [Vehicle], { description: 'An array of vehicles that are in this film.' })
    public vehicles!: string[];

    @Field(() => [Species], { description: 'An array of species that are in this film.' })
    public species!: string[];
}

@ObjectType({
    description: 'Unique word from all films openings paired with its number of occurrences in the text.'
})
export class UniqueWord {
    @Field(() => String, { description: 'The word.' })
    public word!: string;

    @Field(() => Number, { description: 'The number of occurrences.' })
    public count!: number;
}
