const initialState = {
  list: [{title: 'Primeira nota', body: 'Corpo da primeira nota'}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      break;
  }

  return state;
};
