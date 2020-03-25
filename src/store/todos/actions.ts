import { TodoItemInterface } from '../../components/interfaces/TodoItem';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, TodosActionTypes } from './actionTypes'

export function addTodo(data: TodoItemInterface): TodosActionTypes {
  return {
    type: ADD_TODO,
    payload: {
      data,
    }
  }
}

export function deleteTodo(id: number): TodosActionTypes {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    }
  }
}

export function completeTodo(id: number): TodosActionTypes {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    }
  }
}
