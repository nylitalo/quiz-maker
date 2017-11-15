import * as React from 'react';

interface Props {}

interface State {
    joinQuiz: boolean;
    quizCode: string;
}

export class JoinQuiz extends React.Component <Props, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            joinQuiz: false,
            quizCode: ""
        };
    }
    
    handleClick = (): void => {
        this.setState({
            joinQuiz: !this.state.joinQuiz
        });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(this.state.quizCode.length < 5) {
            this.setState({
                quizCode: event.currentTarget.value
            })
        }
    }
    //Need this to allow for deleting the firth character so that handleChange works again.
    handleKeyUp = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (this.state.quizCode.length === 5) {
            if(event.keyCode === 8) {
                this.setState({
                    quizCode: this.state.quizCode.slice(0, -1)
                })
            }
        }
    }

    render() {
        let joinButton: any;
        if(this.state.quizCode.length === 5) {
            joinButton = <input type="submit" value="Join"/>;
        }

        if (this.state.joinQuiz) {
            return(
                <div>
                    <label>
                        <input 
                          type="submit" 
                          value="Cancel"
                          onClick={ this.handleClick } />
                        Enter Quiz Code: 
                        </label>
                    <input type="text"
                      value={this.state.quizCode}
                      onChange={e => this.handleChange(e)}
                      onKeyUp={e => this.handleKeyUp(e)}
                      />
                    {joinButton}
                </div>
            );
        } else {
            return(
                
                <div>
                    <input 
                    type="submit" 
                    value="Join Quiz"
                    onClick={ this.handleClick } />
                </div>
            );
        }
    }
}