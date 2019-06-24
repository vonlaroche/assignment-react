import React from "react";
import "./NoteListItem.css";

const NoteListItem = props => {
    return <li>{props.children}<i className="fas fa-trash-alt deleteIcon" onClick={props.delete}></i></li>;
}

export default NoteListItem;