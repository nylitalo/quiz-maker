import * as React from 'react';

import { Answers } from './Answers';

interface SyntheticEvent {
    preventDefault(): void;
}

export class Questions extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: []
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prevState, props) => {
            let newState = prevState;
            newState.questions[event.target.id].question = event.target.value;
            return {questions: newState.questions};
        });
    }

    createNewQuestion = (event: SyntheticEvent) => {
        event.preventDefault();
        const newQuestion: {} = {
            id: this.state.questions.length,
            question: '',
            answerType: '',
            answers: []
        };
        this.setState({
            questions: [...this.state.questions, newQuestion]
        });
    }

    render() {
        return(
            <div>
                {this.state.questions.map((question: any) => {
                    return (
                        <div key={question.id}>
                        <label>Question: </label>
                        <input type="text" id={question.id} value={question.question} onChange={this.handleChange}/>
                        <br/>
                        <Answers />
                        </div>
                    );
                })}
                <button onClick={this.createNewQuestion}>Add Question</button>
            </div>
        );
    }
}