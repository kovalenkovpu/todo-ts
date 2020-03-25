import { TodoItemInterface } from '../interfaces/TodoItem';

export const getCompletedItems = (todoList: TodoItemInterface[]): number => todoList
  .filter(({ active }: { active: boolean }): boolean => !active)
  .length;

export const getActiveItems = (
  todoList: TodoItemInterface[],
): number => todoList.length - getCompletedItems(todoList);

export const getProgressBarData = (todoList: TodoItemInterface[]): number => {
  if (todoList.length === 0) {
    return 0;
  }

  return Number((getCompletedItems(todoList) / todoList.length * 100).toFixed());
};

export const getProgressBarDangerData = (todoList: TodoItemInterface[]): number => {
  if (todoList.length === 0) {
    return 0;
  }

  return 100 - getProgressBarData(todoList);
};
