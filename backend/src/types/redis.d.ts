import { Resource } from '@/enums/resources';

import Film from '@/schema/typeDefs/Film';
import Person from '@/schema/typeDefs/Person';
import Planet from '@/schema/typeDefs/Planet';
import Vehicle from '@/schema/typeDefs/Vehicle';
import Species from '@/schema/typeDefs/Species';
import Starship from '@/schema/typeDefs/Starship';

export type ICacheRedis = {
    [key: `/${Resource.Films}`]: Film[];
    [key: `/${Resource.People}`]: Person[];
    [key: `/${Resource.Planets}`]: Planet[];
    [key: `/${Resource.Species}`]: Species[];
    [key: `/${Resource.Starships}`]: Starship[];
    [key: `/${Resource.Vehicles}`]: Vehicle[];
    [key: `/${Resource.Films}/${string}`]: Film;
    [key: `/${Resource.People}/${string}`]: Person;
    [key: `/${Resource.Planets}/${string}`]: Planet;
    [key: `/${Resource.Species}/${string}`]: Species;
    [key: `/${Resource.Starships}/${string}`]: Starship;
    [key: `/${Resource.Vehicles}/${string}`]: Vehicle;
};
