import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Person from '@/schema/typeDefs/Person';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Person)
export default class PersonResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Person], {
        description: 'Gets all characters of all Star Wars films'
    })
    public async allPeople(): Promise<[Person]> {
        const people = await this.dataService.getAll('people');

        return people;
    }

    @Query(() => Person, {
        description: 'Gets one Star Wars character by ID'
    })
    public async person(@Arg('id') id: number): Promise<Person> {
        const person = await this.dataService.getOne('people', id);

        return person;
    }
}
