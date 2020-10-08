export const initialState = {
  term: null,
};

//After typing Search term change it using this
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//state - state of data layer and action -  where we dispatiching it into data layer
const reducer = (state, action) => {
  console.log(action);
  //reducer task is to listen any dispatched actions
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      //return what new data layer look like
      return {
        ...state, //spread operator
        term: action.term, //change the term based on action
      };

    default:
      return state;
  }
};

export default reducer;
