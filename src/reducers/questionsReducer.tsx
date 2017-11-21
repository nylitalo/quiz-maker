import { Action } from '../actions';
import { Store } from './';


const initialState: Store.Questions = {
    questions: []
};

export const questions = (state: Store.Questions = initialState, action: Action): Store.Questions => {
    const newState = state
    switch (action.type) {
        case 'CREATE_NEW_QUESTION':
            let addQuestion = [...newState.questions, action.payload]
            return {questions: addQuestion};
    }
    return state
}