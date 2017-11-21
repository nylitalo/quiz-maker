import { TypeKeys } from './actionTypeKeys';

export type ActionTypes = 
    | CreateQuestionAction
    | CreateAnswerAction;

export interface CreateQuestionAction {
    type: TypeKeys.CREATE_NEW_QUESTION;
    by: any;
}

export interface CreateAnswerAction {
    type: TypeKeys.CREAT_NEW_ANSWER;
    by: {};
}