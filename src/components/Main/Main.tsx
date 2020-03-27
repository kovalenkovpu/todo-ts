import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Badge,
  Progress,
} from 'reactstrap';

import TodoForm from '../TodoForm';
import ItemsList from '../ItemsList';
import WeatherWidget from '../WeatherWidget';

import { MainProps } from '.';

const Main: React.FC<MainProps> = ({
  todoList,
  addTodo,
  deleteTodo,
  completeTodo,
  completed,
  toBeDone,
  barDataDone,
  barDataNotDone,
}) => (
  <Container className="themed-container main p-1" fluid>
    <Row>
      <Col md="2" className="bg-light">
        <Card body className="shadow-sm m-3">
          <CardTitle><h2>Statistics</h2></CardTitle>
          <CardText>
            <Badge href="#" color="success">{`Completed: ${completed}`}</Badge>
            <br />
            <Badge href="#" color="danger">{`To be done: ${toBeDone}`}</Badge>
            <p className="mb-1 mt-3">Progress:</p>
            <Progress multi>
              <Progress
                bar
                color="success"
                value={barDataDone}
              >
                {`${barDataDone}%`}
              </Progress>
              <Progress
                bar
                color="danger"
                value={barDataNotDone}
              >
                {`${barDataNotDone}%`}
              </Progress>
            </Progress>
          </CardText>
        </Card>
        <WeatherWidget
          city="London"
        />
      </Col>
      <Col md="3">
        <Card body className="shadow-sm m-3">
          <CardTitle><h2>Add new to-do</h2></CardTitle>
          <CardText>
            <TodoForm
              onTodoItemAdd={addTodo}
            />
          </CardText>
        </Card>
      </Col>
      <Col md="7" className="bg-light">
        <h2>To-dos</h2>
        <ItemsList
          todoList={todoList}
          onTodoItemDelete={deleteTodo}
          onTodoItemComplete={completeTodo}
        />
      </Col>
    </Row>
  </Container>
);

export default Main;
