import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  updateChecked = () => {
    const { todo, checkHandler } = this.props;
    checkHandler(todo.id);
  }

  deleteSelf = () => {
    const { todo, deleteHandler } = this.props;
    deleteHandler(todo.id);
  }

  render() {
    const { todo } = this.props;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={this.updateChecked}
        />
        <button type="button" onClick={this.deleteSelf}> Delete </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(String).isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TodoItem;
