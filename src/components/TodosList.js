import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  render() {
    const { todos, checkHandler, deleteHandler } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkHandler={checkHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TodosList;
