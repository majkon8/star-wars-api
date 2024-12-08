import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Pagination metadata.' })
export default class Pagination {
    @Field(() => Boolean, {
        description: 'Is next page available.'
    })
    public nextPage!: boolean;

    @Field(() => Boolean, {
        description: 'Is previous page available.'
    })
    public previousPage!: boolean;

    @Field(() => Number, {
        description: 'Total number of records.'
    })
    public total!: number;
}
