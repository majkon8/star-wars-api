import axios from 'axios';

import { config } from '@/config';

const { swapiUrl } = config;

axios.defaults.baseURL = swapiUrl;

export default axios;
