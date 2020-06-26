//the reducer takes two parameters state and action.
//when you want to access members of the functions directly you have to declare the function as anonymous.
//the initial states are optional but its best presentation that people know what states are being used by the reducer.
//reducer actually stores all the states.
//(...state) calls all the existing states and then we compare and set new states.
const Initial_States = {
  key: '',
  value: '',
  Data: '',
  select: '',
  Selected: '',
};

export default (state = Initial_States, action) => {
  switch (action.type) {
    case 'FormChanger': {
      return {...state, [action.payload.key]: action.payload.value};
    }
    case 'getData': {
      return {...state, Data: action.payload};
    }

    case 'Selected': {
      return {...state, selected: false};
    }

    default:
      return state;
  }
};
