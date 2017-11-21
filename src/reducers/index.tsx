import { combineReducers } from 'redux';

export namespace Store {
    export type Questions = { questions: Object[] }

    export type All = {
        questions: Questions
    }
}

export default combineReducers({
    
})