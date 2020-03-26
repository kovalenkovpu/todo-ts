import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  addTodo,
  deleteTodo,
  completeTodo,
} from '../../store/todos/actions';
import {
  getActiveItems,
  getCompletedItems,
  getProgressBarDangerData,
  getProgressBarData,
} from '../utils';
import { RootState } from '../../store/rootReducer';
import { TodosActionTypes } from '../../store/todos/actionTypes';
import { TodoItemInterface } from '../interfaces/TodoItem';

import Main from './Main';

interface StateProps {
  todoList: TodoItemInterface[];
  completed: number;
  toBeDone: number;
  barDataDone: number;
  barDataNotDone: number;
}

interface DispatchProps {
  addTodo(data: TodoItemInterface): TodosActionTypes;
  deleteTodo(id: number): TodosActionTypes;
  completeTodo(id: number): TodosActionTypes;
}

type Dispatch = ThunkDispatch<RootState, null, TodosActionTypes>;

const mapStateToProps = (store: RootState): StateProps => {
  const todoStore = store.todos;

  return {
    todoList: todoStore.todos,
    completed: getCompletedItems(todoStore.todos),
    toBeDone: getActiveItems(todoStore.todos),
    barDataDone: getProgressBarData(todoStore.todos),
    barDataNotDone: getProgressBarDangerData(todoStore.todos),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTodo: (data: TodoItemInterface): TodosActionTypes => dispatch(addTodo(data)),
  deleteTodo: (id: number): TodosActionTypes => dispatch(deleteTodo(id)),
  completeTodo: (id: number): TodosActionTypes => dispatch(completeTodo(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type MainProps = ConnectedProps<typeof connector>;

export default connector(Main);
