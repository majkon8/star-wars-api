import { Container } from 'typedi';
import { buildSchema } from 'type-graphql';

import FilmResolver from '@/schema/resolvers/FilmResolver';

import type { GraphQLSchema } from 'graphql';

export const buildGqlSchema = async (): Promise<GraphQLSchema> =>
    buildSchema({
        resolvers: [FilmResolver],
        container: Container
    });
