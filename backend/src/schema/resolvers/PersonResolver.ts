import { Service } from 'typedi';
import { Query, Resolver, Arg, FieldResolver, Root } from 'type-graphql';

import { Resource } from '@/enums/resources';
import { DataService } from '@/services/DataService';
import findMostFrequentNames from '@/helpers/findMostFrequentNames';
import { AllPeople, MostMentionedCharacters, Person } from '@/schema/typeDefs/Person';

@Service()
@Resolver(Person)
export default class PersonResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => AllPeople, {
        description: 'Gets all characters of all Star Wars films'
    })
    public async allPeople(@Arg('page') page: number): Promise<AllPeople> {
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

    @Query(() => MostMentionedCharacters, {
        description: 'Gets a character that appears the most often across all of the openings of the film.'
    })
    public async mostMentionedCharacters(): Promise<MostMentionedCharacters> {
        const mergedOpenings = await this.dataService.getMergedOpenings();
        const allCharacters = await this.dataService.getAll(Resource.People);
        const characterNames = allCharacters.map((character: { name: string }) => character.name);

        const result = findMostFrequentNames(mergedOpenings, characterNames);

        return { names: result };
    }

    @FieldResolver()
    async homeworld(@Root() person: Person) {
        const planets = await this.dataService.getAdditionalData([person.homeworld], Resource.Planets);

        return planets![0];
    }

    @FieldResolver()
    async films(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.films, Resource.Films);
    }

    @FieldResolver()
    async species(@Root() person: Person) {
        return this.dataService.getAdditionalData(person.species, Resource.Species);
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
