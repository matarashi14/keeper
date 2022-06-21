import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleExpand() {
    setExpanded(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div className="createNote">
      <form>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          placeholder="Take note here..."
          value={note.content}
          rows={isExpanded ? "3" : "1"}
          onClick={handleExpand}
        />

        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
