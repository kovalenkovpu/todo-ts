import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ButtonToggle,
} from 'reactstrap';

import './TodoItem.scss';

import { TodoItemInterface } from '../interfaces/TodoItem';

export interface TodoItemProps {
  key: number;
  todoItemData: TodoItemInterface;
  onTodoItemDelete(id: number): void;
  onTodoItemComplete(id: number): void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItemData,
  onTodoItemDelete,
  onTodoItemComplete,
}) => {
  const { id, active, title, description } = todoItemData;
  const handleDelete = (): void => {
    onTodoItemDelete(id);
  };
  const handleComplete = (): void => {
    onTodoItemComplete(id);
  };

  return (
    <ListGroup className="shadow-sm m-1">
      <ListGroupItem active={active}>
        <ListGroupItemHeading>{title}</ListGroupItemHeading>
        <ListGroupItemText>
          {description}
        </ListGroupItemText>
        <ButtonToggle
          color="success m-1"
          onClick={handleComplete}
          disabled={!active}
        >
          Complete
        </ButtonToggle>
        <ButtonToggle
          color="danger m-1"
          onClick={handleDelete}
        >
          Delete
        </ButtonToggle>
      </ListGroupItem>
    </ListGroup>
  );
};

export default TodoItem;
