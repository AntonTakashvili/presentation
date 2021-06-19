import React from 'react';
import './item.css';
import deleteIcon from './../../assets/icons/delete-icon.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { editItem, toggleItemCompleted, deleteItem } from '../../store/helpers';

const Item = ({
  toggleCompletedAction,
  data,
  deleteTaskAction,
  editTaskAction,
}) => {
  return (
    <div className="task">
      <input
        onChange={() => {
          const token = localStorage.getItem('token');
          toggleItemCompleted({
            token: `Bearer ${token}`,
            id: data._id,
            completed: !data.completed,
          }).then(() => toggleCompletedAction(data._id));
        }}
        type="checkbox"
        checked={data.completed}
      />
      <span className={data.completed ? 'strike' : 'text'}>{data.text}</span>
      <button
        className="edit-btn"
        onClick={() => {
          const editTextPrompt = prompt('Enter Edited Text: ');
          if (editTextPrompt && editTextPrompt.trim()) {
            const editedText = editTextPrompt;
            editItem(data._id, editedText).then(() =>
              editTaskAction(data._id, editTextPrompt)
            );
          }
        }}
      >
        Edit
      </button>
      <button className="delete-btn">
        <img
          className="delete-icon"
          onClick={() =>
            deleteItem(data._id).then(() => deleteTaskAction(data._id))
          }
          src={deleteIcon}
          alt="delete-icon"
        />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  editTaskAction: actions.editTaskAction,
  toggleCompletedAction: actions.toggleCompletedAction,
  deleteTaskAction: actions.deleteTaskAction,
};

export default connect(null, mapDispatchToProps)(Item);
