import React from 'react';
import Header from './Header';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup Development Environment 1',
          completed: true,
        },
        {
          id: 2,
          title: 'Setup Development Environment 2',
          completed: true,
        },
        {
          id: 3,
          title: 'Setup Development Environment 3',
          completed: true,
        },
      ],
    };
    this.updateCompleted = this.updateCompleted.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  updateCompleted(id) {
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

  delTodo(id) {
    this.setState((previousState) => ({
      todos: [...previousState.todos.filter((todo) => todo.id !== id)],
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={todos} checkHandler={this.updateCompleted} deleteHandler={this.delTodo} />
      </div>
    );
  }
}
export default TodoContainer;
