import {
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { authedUser, qid, answer } = action.question;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      };
      case ADD_QUESTION:
        // const { question, question: { id } } = action
        const { question } = action
        const { id } = question
        return {
          ...state,
          [id]: question
        }
    default:
      return state;
  }
}
