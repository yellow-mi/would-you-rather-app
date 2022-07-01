import { ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER, RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
            case ADD_ANSWER_TO_USER:
                const { authedUser, qid, answer } = action;
          
                return {
                  ...state,
                  [authedUser]: {
                    ...state[authedUser],
                    answers: {
                      ...state[authedUser].answers,
                      [qid]: answer
                    }
                  }
                };
                case ADD_QUESTION_TO_USER:
                  return {
                    ...state,
                    [action.author]: {
                      ...state[action.author],
                      questions: state[action.author].questions.concat([action.qid])
                    }
                  }
        default:
            return state
    }
}