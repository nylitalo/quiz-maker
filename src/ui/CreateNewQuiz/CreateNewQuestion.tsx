import * as React from 'react'

export interface ICreateNewQuestion {
    id: number;
}

export const CreateNewQuestion = (props: ICreateNewQuestion) => {
    return (
        <form>
        <label>Question #{props.id}</label>   
            <textarea />
        </form>
    )
}