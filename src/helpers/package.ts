import { Archetype } from "../types";
import packages from "../data/packages.json";

const NUM_OF_RANDOM_PACKAGES = 3;

export const generatePackages = (archetype: Archetype) => {
  // loop over all the packages and pull out the packages that match the tags
  const matches = packages.filter((p) => {
    return p.tags.includes(archetype.name.toLowerCase());
  });

  // pick 3 at random
  const result = new Set();
  while (result.size < NUM_OF_RANDOM_PACKAGES) {
    result.add(matches[Math.floor(Math.random() * matches.length)]);
  }

  return Array.from(result);
};
