import * as React from 'react';

import {CreateNewQuiz} from './ui/CreateNewQuiz/CreateNewQuiz'

export interface Props {

}

export class App extends React.Component implements Props {
    render() {
        return (
            <CreateNewQuiz />
        )
    }
}