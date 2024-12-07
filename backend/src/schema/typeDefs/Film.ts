import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars film' })
export default class Film {
    @Field(() => String, { description: 'Title of the film' })
    public title!: string;

    @Field(() => Int, { description: 'Episode number of the film' })
    public episode_id!: number;

    @Field(() => String, { description: 'Opening crawl text of the film' })
    public opening_crawl!: string;

    @Field(() => String, { description: 'Director of the film' })
    public director!: string;

    @Field(() => [String], { description: 'Producers of the film' })
    public producers!: string[];

    @Field(() => GraphQLISODateTime, { description: 'Release date of the film' })
    public release_date!: Date;

    @Field(() => [String], { description: 'Characters in the film' })
    public characters!: string[];

    @Field(() => [String], { description: 'Planets in the film' })
    public planets!: string[];

    @Field(() => [String], { description: 'Starships in the film' })
    public starships!: string[];

    @Field(() => [String], { description: 'Vehicles in the film' })
    public vehicles!: string[];

    @Field(() => [String], { description: 'Species in the film' })
    public species!: string[];
}
