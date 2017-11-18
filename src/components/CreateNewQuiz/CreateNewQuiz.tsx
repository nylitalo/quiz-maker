import * as React from 'react';

interface State {
    questions: Object[];
}

interface Props {}

interface SyntheticEvent {
    preventDefault(): void;
}

export class CreateNewQuiz extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            questions: []
        };
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

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        this.setState((prevState) => {
            let newState = prevState;
            newState.questions[event.target.id].question = event.target.value;
            return {questions: newState.questions};
        });
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
                    {/*Replace the any type as soon as i figure out what to put there!*/}
                    {this.state.questions.map((question: any) => {
                        return (
                            <div key={question.id}>
                            <label>Question: </label>
                            <input type="text" id={question.id} value={question.question} onChange={this.handleChange}/>
                            <br/>
                            <label>Answers: </label>
                            {question.answers.map((answer: {id: number, answer: string, rightAnswer: boolean}) => {
                                return (
                                    <div key={answer.id}>
                                        <label>#{answer.id + 1}: </label>
                                        <input type="text" value={answer.answer} onChange={this.handleChange}/>
                                    </div>
                                );
                            })}
                            </div>
                        );
                    })}
                    <button onClick={this.createNewQuestion}>Add Question</button>
                </form>         
            </div>
        );
    }
}