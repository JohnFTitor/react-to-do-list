import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    const { title } = this.state;
    if (title.trim()) {
      addTodo(title.trim());
      this.setState(() => ({
        title: '',
      }));
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;
