import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const {
    todo,
    handleChangeProps,
    deleteTodoProps,
    setUpdate,
  } = props;
  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span className={completed ? 'completedStyle' : null}>{title}</span>
      </div>
      <input
        type="text"
        className="input-text"
        style={editMode}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
