//this function will dynamically change all the values of the form you pass as parameter to it.
//pass a key and value as a object in to the action.

/* remember when you are using normal library of redux so you can only return an action in the function.
and if you want to return a function instead of action you will have to use redux-thunk.*/

//To avoid type error must take care of the type that is must to be string.
// the FieldsChanger is action creater while the code inside return is the actual action, that is produce by the action creater.

export const fieldsSetter = ({key, value}) => {
  return {
    type: 'FormChanger',
    payload: {key, value},
  };
};

//this action is for the selection of the individual id from the list.

/*
export const selectId = id => {
  return dispatch => {
    dispatch({
      type: 'Selected',
    });

    dispatch({
      type: 'Select',
      payload: id,
    });
  };
};

*/
