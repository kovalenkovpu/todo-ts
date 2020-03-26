import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './TodoForm.scss';

import { TodoItemInterface } from '../interfaces/TodoItem';

export interface TodoForm {
  onTodoItemAdd(data: TodoItemInterface): void;
}

const TodoForm: React.FC<TodoForm> = ({ onTodoItemAdd }) => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const onChange = (
    handler: React.Dispatch<string>,
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    handler(e.target.value);
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    onTodoItemAdd({
      id: Date.now(),
      title,
      description,
      active: true,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup className="m-1">
        <Label for="title" className="mr-sm-2">Title</Label>
        <Input
          onChange={onChange(setTitle)}
          value={title}
          type="text"
          name="title"
          id="title"
          required
        />
      </FormGroup>
      <FormGroup className="m-1">
        <Label for="description">Text Area</Label>
        <Input
          onChange={onChange(setDescription)}
          value={description}
          type="textarea"
          name="description"
          id="description"
        />
      </FormGroup>
      <Button className="m-1 submit">Submit</Button>
    </Form>
  );
};

export default TodoForm;
