import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateChecked = this.updateChecked.bind(this);
  }

  updateChecked() {
    const { todo, checkHandler } = this.props;
    checkHandler(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={this.updateChecked} />
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(String).isRequired,
  checkHandler: PropTypes.func.isRequired,
};

export default TodoItem;
