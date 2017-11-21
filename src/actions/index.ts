export type Action = {
    type: 'CREATE_NEW_QUESTION',
    payload: {}
}

export const CreateQuestionAction = (id: number, question: string, answers: Object[]): Action => {
    return {
        type: 'CREATE_NEW_QUESTION',
        payload: {
            id,
            question,
            answers
        }
    }
}