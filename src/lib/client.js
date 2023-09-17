import {createClient} from 'next-sanity';

import {apiVersion, dataset, projectId, useCdn} from './env';
// console.log('Sdfdsds1')
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // perspective,
});
