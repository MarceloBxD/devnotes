const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
        };
      } else {
        alert('Erro ao editar a nota!');
      }
      break;
    case 'DELETE_NOTE':
      newList = newList.filter((item, index) => index != action.payload.key);
  }

  return {...state, list: newList};
};
