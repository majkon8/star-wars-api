import { Container } from 'typedi';
import { buildSchema } from 'type-graphql';

import FilmResolver from '@/schema/resolvers/FilmResolver';
import PersonResolver from '@/schema/resolvers/PersonResolver';
import PlanetResolver from '@/schema/resolvers/PlanetResolver';
import SpeciesResolver from '@/schema/resolvers/SpeciesResolver';
import VehicleResolver from '@/schema/resolvers/VehicleResolver';
import StarshipResolver from '@/schema/resolvers/StarshipResolver';

import type { GraphQLSchema } from 'graphql';

export const buildGqlSchema = async (): Promise<GraphQLSchema> =>
    buildSchema({
        resolvers: [FilmResolver, PersonResolver, SpeciesResolver, VehicleResolver, StarshipResolver, PlanetResolver],
        container: Container,
        validate: true
    });
