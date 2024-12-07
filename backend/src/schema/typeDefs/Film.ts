import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars film' })
export default class Film {
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

    @Field(() => [String], { description: 'An array of people resource URLs that are in this film.' })
    public characters!: string[];

    @Field(() => [String], { description: 'An array of planet resource URLs that are in this film.' })
    public planets!: string[];

    @Field(() => [String], { description: 'An array of starship resource URLs that are in this film.' })
    public starships!: string[];

    @Field(() => [String], { description: 'An array of vehicle resource URLs that are in this film.' })
    public vehicles!: string[];

    @Field(() => [String], { description: 'An array of species resource URLs that are in this film.' })
    public species!: string[];
}
