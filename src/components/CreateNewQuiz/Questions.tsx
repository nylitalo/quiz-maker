import * as React from 'react';

interface State {
    questions: Object[];
}


export class Questions extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: []
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prevState) => {
            let newState = prevState;
            newState.questions[event.target.id].question = event.target.value;
            return {questions: newState.questions};
        });
    }

    render() {
        return(
            <div>
                {this.props.questions.map((question: any) => {
                    return (
                        <div key={question.id}>
                        <label>Question: </label>
                        <input type="text" id={question.id} value={question.question} onChange={this.props.handleChange}/>
                        <br/>
                        <label>Answers: </label>
                        {question.answers.map((answer: {id: number, answer: string, rightAnswer: boolean}) => {
                            return (
                                <div key={answer.id}>
                                    <label>#{answer.id + 1}: </label>
                                    <input type="text" value={answer.answer}/>
                                </div>
                            );
                        })}
                        </div>
                    );
                })}
            </div>
        )
    }
}