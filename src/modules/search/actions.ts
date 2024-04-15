"use server"
import { SEARCH_INDEX_NAME } from '@lib/search-client';
import { MeiliSearch } from 'meilisearch';

export const searchClient = new MeiliSearch({
  host: 'http://127.0.0.1:7700',
  apiKey: 'masterKey',
});

interface Hits {
  readonly objectID?: string;
  id?: string;
  [x: string | number | symbol]: unknown;
}

/**
 * Uses MeiliSearch to search for a query
 * @param {string} query - search query
 */
export async function search(query: string): Promise<Hits[]> {
  const index = searchClient.index(SEARCH_INDEX_NAME);
  const searchResults = await index.search(query);
  return searchResults.hits as Hits[];
}
