import * as React from 'react';

export class CreateNewQuiz extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 0,
                    question: '',
                    answerType: '',
                    answers: []
                }
            ]
        };
    }

    createNewQuestion = (e: any) => {
        e.preventDefault();
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
        this.setState((prevState, props) => {
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
                    {this.state.questions.map((obj: any) => {
                        return (
                            <div key={obj.id}>
                            <label>Question: </label>
                            <input type="text" id={obj.id} value={obj.question} onChange={this.handleChange}/>
                            </div>
                        );
                    })}
                    <button onClick={this.createNewQuestion}>Add Question</button>
                </form>         
            </div>
        );
    }
}