import React from 'react';
import Header from './Header';
import TodosList from './TodosList';

// eslint-disable-next-line react/prefer-stateless-function
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
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={todos} />
      </div>
    );
  }
}
export default TodoContainer;
