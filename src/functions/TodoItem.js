import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li className="item">
        <input
          type="checkbox"
          className="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        <span className={this.props.todo.completed ? 'completedStyle' : null}>
          {this.props.todo.title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
