import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars person' })
export default class Person {
    @Field(() => String, { description: 'Name of the person' })
    public name!: string;

    @Field(() => String, { description: 'Height of the person' })
    public height!: string;

    @Field(() => String, { description: 'Weight of the person' })
    public mass!: string;

    @Field(() => String, { description: 'Hair color of the person' })
    public hair_color!: string;

    @Field(() => String, { description: 'Skin color of the person' })
    public skin_color!: string;

    @Field(() => String, { description: 'Eye color of the person' })
    public eye_color!: string;

    @Field(() => String, { description: 'Birth year of the person' })
    public birth_year!: string;

    @Field(() => String, { description: 'Gender of the person' })
    public gender!: string;

    @Field(() => String, { description: 'Planet of origin of the person' })
    public homeworld!: string;

    @Field(() => [String], { description: 'Films the person appeared in' })
    public films!: string[];

    @Field(() => [String], { description: 'Species of the person' })
    public species!: string[];

    @Field(() => [String], { description: 'Vehicles the person has used' })
    public vehicles!: string[];

    @Field(() => [String], { description: 'Starships the person has used' })
    public starships!: string[];
}
