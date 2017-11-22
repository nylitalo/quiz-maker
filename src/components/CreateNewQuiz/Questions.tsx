import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import { CreateQuestionAction } from '../../actions';
import { Store } from '../../reducers';

import { Answers } from './Answers';
import { questions } from '../../reducers/questionsReducer';

interface SyntheticEvent {
    preventDefault(): void;
}


interface OwnProps {
  }
  
  interface ConnectedState {
    questions: [
        {
            id: number,
            question: string,
            answerType: string,
            answers: Object[]
        }
    ]
  }
  
  interface ConnectedDispatch {
    addQuestion: (id: number, question: string, answerType: string, answers: Object[]) => void
  }
  
  interface OwnState {}


const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
    questions: state.questions
})

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
addQuestion: (id: number, question: string, answerType: string, answers: Object[]) => {
    dispatch(CreateQuestionAction(id, question, answerType, answers));
},
})

export class Questions extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: []
        };
    }

    createNewQuestion = (event: SyntheticEvent) => {
        event.preventDefault();
        const id: number = 0;
        const question: string = '';
        const answerType: string = '';
        const answers: Object[] = [];
        this.props.addQuestion(id, question, answerType, answers);
    }

    render() {
        return(
            <div>
                {this.props.questions.map((question: any) => {
                    return (
                        <div key={question.id}>
                        <label>Question: </label>
                        <input type="text" id={question.id} value={question.question} />
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