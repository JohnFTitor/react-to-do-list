import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateChecked = this.updateChecked.bind(this);
    this.deleteSelf = this.deleteSelf.bind(this);
  }

  updateChecked() {
    const { todo, checkHandler } = this.props;
    checkHandler(todo.id);
  }

  deleteSelf() {
    const { todo, deleteHandler } = this.props;
    deleteHandler(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={this.updateChecked} />
        <button type="button" onClick={this.deleteSelf}> Delete </button>
        {todo.title}
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
