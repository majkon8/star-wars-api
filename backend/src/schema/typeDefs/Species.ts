import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars species' })
export default class Species {
    @Field(() => String, { description: 'Name of the species' })
    public name!: string;

    @Field(() => String, { description: 'Classification of the species' })
    public classification!: string;

    @Field(() => String, { description: 'Designation of the species' })
    public designation!: string;

    @Field(() => String, { description: 'Average height of the species' })
    public average_height!: string;

    @Field(() => String, { description: 'Skin colors possible for the species' })
    public skin_colors!: string;

    @Field(() => String, { description: 'Hair colors possible for the species' })
    public hair_colors!: string;

    @Field(() => String, { description: 'Eye colors possible for the species' })
    public eye_colors!: string;

    @Field(() => String, { description: 'Average lifespan of the species' })
    public average_lifespan!: string;

    @Field(() => String, { description: 'Planet that the species originates from' })
    public homeworld!: string;

    @Field(() => String, { description: 'Language spoken by the species' })
    public language!: string;

    @Field(() => [String], { description: 'People that are of the species' })
    public people!: string[];

    @Field(() => [String], { description: 'Films the species appeared in' })
    public films!: string[];
}
