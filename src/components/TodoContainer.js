import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup Development Environment 1',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Setup Development Environment 2',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Setup Development Environment 3',
          completed: true,
        },
      ],
    };
  }

  updateCompleted = (id) => {
    this.setState((previousState) => (
      {
        todos: previousState.todos.map((todo) => {
          let { completed } = todo;
          if (todo.id === id) {
            completed = !todo.completed;
          }
          return { ...todo, completed };
        }),
      }
    ));
  }

  delTodo = (id) => {
    this.setState((previousState) => ({
      todos: [...previousState.todos.filter((todo) => todo.id !== id)],
    }));
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((previousState) => ({
      todos: [...previousState.todos, newTodo],
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodo={this.addTodoItem} />
        <TodosList todos={todos} checkHandler={this.updateCompleted} deleteHandler={this.delTodo} />
      </div>
    );
  }
}
export default TodoContainer;
