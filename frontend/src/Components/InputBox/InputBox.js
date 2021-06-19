import React from "react";
import { useState } from "react";
import "./inputBox.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { addData } from "../../store/helpers";

const InputBox = ({ addItemAction }) => {
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      const token = localStorage.getItem("token");
      addData({
        text,
        completed: false,
        token: `Bearer ${token}`,
      }).then(({ data }) => addItemAction(text, data._id));
      setText("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="text-field"
        onChange={({ target: { value } }) => {
          setText(value);
        }}
        value={text}
        onKeyDown={handleKeyPress}
      />
      <button className="add-task-btn" onClick={addTodo}>
        Add Task
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItemAction: actions.addItemAction,
};

export default connect(null, mapDispatchToProps)(InputBox);
