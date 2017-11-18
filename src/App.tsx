import * as React from 'react';

// import { Home } from './components/Home/Home';
import { CreateNewQuiz } from './components/CreateNewQuiz/CreateNewQuiz';

export interface Props {

}

export class App extends React.Component implements Props {
    render() {
        return (
            <CreateNewQuiz />
        );
    }
}