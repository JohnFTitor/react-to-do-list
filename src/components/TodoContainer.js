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
          title: 'Setup Development Environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Setup Development Environment',
          completed: true,
        },
        {
          id: 3,
          title: 'Setup Development Environment',
          completed: true,
        },
      ],
    };
    this.updateCompleted = this.updateCompleted.bind(this);
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

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={todos} checkHandler={this.updateCompleted} />
      </div>
    );
  }
}
export default TodoContainer;
