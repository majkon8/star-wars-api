import { IsIn, IsNumber } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default class FilmArgs {
    @Field(() => Int, { description: 'Episode number of the film to fetch' })
    @IsNumber()
    @IsIn([1, 2, 3, 4, 5, 6])
    public episode!: number;
}
