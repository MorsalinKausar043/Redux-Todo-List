const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if (data.length > 2) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id,
              data,
            },
          ],
        };
    }

    break;

    case "DELETE_TODO":
        const newList = state.list.filter(val => val.id !== action.id);

        return{
            ...state,
            list:newList
        }

    case "REMOVE_TODO":
        return{
            ...state,
            list:[]
        }

    default:
      return state;
  }
};

export default todoReducers;
