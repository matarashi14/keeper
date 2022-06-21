import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Draggable from "react-draggable";

function Note(props) {
  function handleClick(e) {
    props.onDelete(props.id);
  }

  return (
    <Draggable>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </Draggable>
  );
}

export default Note;
