import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        TYPE: ADD_QUESTION,
        question,
    }
}