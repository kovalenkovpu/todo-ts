import { TodoItemInterface } from '../../components/interfaces/TodoItem';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, TodosActionTypes } from './actionTypes';

export interface TodoState {
  todos: TodoItemInterface[];
}

const initialState = {
  todos: [],
};

export const todos = (state: TodoState = initialState, action: TodosActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.data],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.active = false;
          }

          return todo;
        }),
      };

    default:
      return state;
  }
};
