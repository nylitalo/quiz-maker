import * as React from 'react';

interface Props {}

interface State {
    questions: Object[]
}

export class CreateNewQuiz extends React.Component<Props, State> {
    constructor(props:{}) {
        super(props);
        this.state = {
            questions: [
            ]
        }
    }

    createNewQuestion = () => {
        this.setState({
        })
    }
    
    render() {
        return(
            <div>
                <form>
                    <label>Quiz name: </label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="text"/>
                    /**
                     * 
                     */
                </form>         
            </div>
        )
    }
}