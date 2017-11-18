import * as React from 'react';

import { Questions } from './Questions';

interface State {
    questions: Object[];
}

interface Props {}

export class CreateNewQuiz extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    render () {
        return(
            <div>
                <form>
                    <label>Quiz name: </label>
                    <input type="text"/>
                    <br/>
                    <label>Password</label>
                    <input type="text"/>
                    <br/>
                    <Questions />  
                    <br/>
                    <label>Created by: </label>
                    <input type="text"/>
                    <br/>
                </form>         
            </div>
        );
    }
}