import * as React from 'react';

interface SyntheticEvent {
    preventDefault(): void;
}

interface State {
    answers: {
        id: number,
        answer: string,
        correct: boolean
    }[];
}

export class Answers extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            answers: []
        };
    }

    createNewAnswer = (event: SyntheticEvent) => {
        event.preventDefault();
        const newAnswer: {id: number, answer: string, correct: boolean} = {
            id: this.state.answers.length,
            answer: '',
            correct: false
        };
        this.setState((prevState) => {
            let newState = prevState;
            newState.answers = [...newState.answers, newAnswer];
            return {
                answers: newState.answers
            };
        });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prevState) => {
            let newState = prevState;
            newState.answers[event.target.id].answer = event.target.value;
            return {questions: newState.answers};
        });
    }

    setCorrectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prevState) => {
            let newState = prevState;
            for (let i in newState.answers) {
                if (i === event.target.id) {
                    newState.answers[event.target.id].correct = !newState.answers[event.target.id].correct;
                } else {
                    newState.answers[i].correct = false;
                }
            }
            return {questions: newState.answers};
        });
    }

    render() {
        return(
            <div>
                <label>Answers | Correct Answer</label>
                <br/>
                {this.state.answers.map((answer: any) => {
                    return (
                        <div key={answer.id}>
                            <label>#{answer.id + 1}: </label>
                            <input 
                                type="text" 
                                value={answer.answer} 
                                id={answer.id} 
                                onChange={this.handleChange}
                            />
                            <input 
                                type="checkbox" 
                                onChange={this.setCorrectAnswer} 
                                id={answer.id} 
                                checked={answer.correct}
                            />
                        </div>
                    );
                })}
                <button onClick={this.createNewAnswer}>Add Answer</button>
            </div>
        );
    }
}