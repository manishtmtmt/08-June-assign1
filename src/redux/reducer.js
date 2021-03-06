import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    ...payload,
                    id: state.todos.length
                }
            ]
        }
    }
    case COMPLETE_TODO: {
        return { ...state }
    }
    case UPDATE_TODO: {
        return { ...state }
    }
    case DELETE_TODO: {
        return { ...state }
    }
    default: {
      return state;
    }
  }
};

export default todoReducer
