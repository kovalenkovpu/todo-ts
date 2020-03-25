import { TodoItemInterface } from '../../components/interfaces/TodoItem';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    data: TodoItemInterface;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  payload: {
    id: number;
  };
}

export type TodosActionTypes = AddTodoAction
  | DeleteTodoAction
  | CompleteTodoAction;
