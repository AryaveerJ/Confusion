import * as ActionTypes from "./ActionTypes";

export const InitialFeedback = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};

export const Feedbacks = (state = { errMess: null, feedbacks: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedbacks: state.feedbacks.concat(feedback) };

    default:
      return state;
  }
};
