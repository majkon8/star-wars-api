import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

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

    @FieldResolver()
    async films(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.films, 'films');
    }

    @FieldResolver()
    async species(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.species, 'species');
    }

    @FieldResolver()
    async starships(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.starships, 'starships');
    }

    @FieldResolver()
    async vehicles(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.vehicles, 'vehicles');
    }
}
