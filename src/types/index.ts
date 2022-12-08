export type onActionType = (args: { type: string; data?: any }) => void;

export enum onActionEvents {
  takeQuiz = "takeQuiz",
  getAnswers = "getAnswers",
}

export type Archetype = {
  name: string;
  header: string;
  description: string;
};
