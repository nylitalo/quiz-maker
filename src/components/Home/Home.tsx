import * as React from 'react';

import { JoinQuiz } from './JoinQuiz';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/src/lib/img/qm_logo.png" alt="Quiz Maker Logo"/>
                </div>
                <div className="main-menu">
                    <button>Create New Quiz</button>
                    <JoinQuiz />
                </div>
            </div>
        );
    }
}