import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import Person from '@/schema/typeDefs/Person';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Person)
export default class PersonResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Person], {
        description: 'Gets all characters of all Star Wars films'
    })
    public async allPeople(@Arg('page') page: number): Promise<[Person]> {
        const people = await this.dataService.getAll(Resource.People, page);

        return people;
    }

    @Query(() => Person, {
        description: 'Gets one Star Wars character by ID'
    })
    public async person(@Arg('id') id: number): Promise<Person> {
        const person = await this.dataService.getOne(Resource.People, id);

        return person;
    }

    @FieldResolver()
    async films(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.films, Resource.Films);
    }

    @FieldResolver()
    async species(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.species, Resource.People);
    }

    @FieldResolver()
    async starships(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.starships, Resource.Starships);
    }

    @FieldResolver()
    async vehicles(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.vehicles, Resource.Vehicles);
    }
}
