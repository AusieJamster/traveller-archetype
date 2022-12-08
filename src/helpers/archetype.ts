type Archetype = {
  name: string;
  header: string;
  description: string;
};

import archetypes from "../data/archetypes.json";
import questions from "../data/questions.json";

/**
 * Returns an archetype based on the questions answered in the questionnaire
 * @param answers
 */
export const getArchetype = (answers: any[]): Archetype | undefined => {
  // iterate over the answers and track the values

  const resultTally = archetypes.map((archetype: Archetype) => ({
    [archetype.name]: 0,
  }));

  // iterate over answers and +1 the count of the given type
  answers.forEach((answer) => {});

  // parse the results and surface the higest value
  const result: Archetype | undefined = archetypes.find(
    (a) => a.name === "Luxury"
  );

  return result;
};
