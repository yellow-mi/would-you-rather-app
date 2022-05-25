import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTION,
        questions
    }
}

function addQuestion(question) {
    return {
        TYPE: ADD_QUESTION,
        question
    }
}