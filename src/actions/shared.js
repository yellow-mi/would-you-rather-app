import { _getQuestions } from "../_DATA";
import { receiveQuestions } from "./Questions";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./Questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        return getInitalData()
        .then(({ questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}