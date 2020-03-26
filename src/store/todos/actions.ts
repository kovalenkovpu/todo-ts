import { TodoItemInterface } from '../../components/interfaces/TodoItem';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, TodosActionTypes } from './actionTypes';

export const addTodo = (data: TodoItemInterface): TodosActionTypes => ({
  type: ADD_TODO,
  payload: {
    data,
  },
});

export const deleteTodo = (id: number): TodosActionTypes => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const completeTodo = (id: number): TodosActionTypes => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});
