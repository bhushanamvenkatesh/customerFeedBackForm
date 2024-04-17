import { combineReducers } from "redux";
import FeedbackFormReducer from './Feedbackform.Reducer'

const reducer=combineReducers({
    Feedback:FeedbackFormReducer

})

export default reducer