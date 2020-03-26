import React from 'react';

import TodoItem from '../TodoItem';
import './ItemsList.scss';

import { TodoItemInterface } from '../interfaces/TodoItem';

export interface ItemsListProps {
  todoList: TodoItemInterface[];
  onTodoItemDelete(id: number): void;
  onTodoItemComplete(id: number): void;
}

const ItemsList: React.FC<ItemsListProps> = ({
  todoList,
  onTodoItemDelete,
  onTodoItemComplete,
}) => {
  if (todoList.length === 0) {
    return <h3>There're no to-dos</h3>;
  }

  return (
    <section>
      {
        todoList
          .map((todoItem: TodoItemInterface): React.ReactNode => (
            <TodoItem
              key={todoItem.id}
              todoItemData={todoItem}
              onTodoItemDelete={onTodoItemDelete}
              onTodoItemComplete={onTodoItemComplete}
            />
          ))
      }
    </section>
  );
};

export default ItemsList;
