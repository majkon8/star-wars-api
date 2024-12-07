import { Field, GraphQLISODateTime, Float, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars film' })
export default class Film {
    @Field(() => String, { description: 'Title of the film' })
    public title!: string;

    @Field(() => Float, { description: 'Episode number of the film' })
    public episode_id!: number;

    @Field(() => String, { description: 'Opening crawl text of the film' })
    public opening_crawl!: string;

    @Field(() => String, { description: 'Director of the film' })
    public director!: string;

    @Field(() => [String], { description: 'Producers of the film' })
    public producers!: string[];

    @Field(() => GraphQLISODateTime, { description: 'Release date of the film' })
    public release_date!: Date;
}
