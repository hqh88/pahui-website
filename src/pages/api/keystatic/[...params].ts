import { makeHandler } from '@keystatic/astro/api';
import keystaticConfig from '../../../../keystatic.config';

export const prerender = false;

const handler = makeHandler({ config: keystaticConfig });

export const ALL = handler;
