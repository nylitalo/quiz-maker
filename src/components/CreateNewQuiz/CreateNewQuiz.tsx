import * as React from 'react';

export interface ICreateNewQuiz {
    name: string;
    id: number;
    content: {
        question: {
            answer: string[]
        }
    };
    created: Date;
    winner: string;
    noOfQuestions: number;
    author: string;
    password?: string;
}

const CreateNewQuiz = (props: ICreateNewQuiz) => {
    
}