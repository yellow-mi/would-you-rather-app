import { _getQuestions, _getUsers } from "../_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        _getQuestions()
        .then(({ questions }) => {
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
        _getUsers()
        .then(({users}) => {
            dispatch(receiveUsers(users))
        })
    }
}