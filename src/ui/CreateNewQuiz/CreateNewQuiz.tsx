import * as React from 'react';

import { CreateNewQuestion } from './CreateNewQuestion';

export const CreateNewQuiz = () => {
    return (
        <div>
            <div>
                <h1>Create New Quiz</h1>
            </div>
            <div>
                <form>
                <label>Quiz Name: </label>   
                    <input />
                </form>
            </div>
            <div>
                <CreateNewQuestion id={5}/>
            </div>
        </div>
    )
}