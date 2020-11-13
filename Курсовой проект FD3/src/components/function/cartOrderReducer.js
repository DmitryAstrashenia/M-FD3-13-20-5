"use strict";

let cartOrderReducer = (
  state = Object.assign({}, JSON.parse(localStorage.getItem("cartOrder"))),
  action
) => {
  switch (action.type) {
    case "counter/incremented":
      state[action.id]++;
      return state;
    case "counter/decremented":
      state[action.id]--;
      return state;
    case "counter/delete":
      delete state[action.id];
      return state;
    default:
      return state;
  }
};

export default cartOrderReducer;
