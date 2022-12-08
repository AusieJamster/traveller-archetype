export type ActionArgs = { type: string; data?: string };

export type onActionType = (args: ActionArgs) => void;

export enum onActionEvents {
  takeQuiz = "takeQuiz",
}
