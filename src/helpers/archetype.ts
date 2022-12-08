

import archetypes from "../data/archetypes.json";
import { Archetype } from "../types";

/**
 * Returns an archetype based on the questions answered in the questionnaire
 * @param answers string array of archetype types i.e. ['luxury', 'luxury', 'family', 'backpacker']
 */
export const getArchetype = (answers: string[]): Archetype | undefined => {
  // iterate over the answers and track the values

  const resultCount = answers.reduce(
    (acc: Record<string, number>, cur: string) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    },
    {}
  );

  const winner = Object.keys(resultCount)
    .reduce(
      (prev: string, cur: string) =>
        resultCount[prev] > resultCount[cur] ? prev : cur,
      ""
    )
    .toLowerCase();

  return archetypes.find(
    (archetype: Archetype) => archetype.name.toLowerCase() === winner
  );
};
