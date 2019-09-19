import React, { useState } from 'react';
import Icon from "./Components/Icon/Icon";
import NoteList from "./Components/NoteList/NoteList";
import AddNoteForm from "./Components/AddNoteForm/AddNoteForm";
import './App.css';


const App = () => {

  // state = {
  //   notes: ["Proper Note 1",
  //     "Proper Note 2",
  //     "😀",
  //     "",
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non."],
  //   newNoteValue: "",
  //   isHidden: true
  // }


  const [notes, setNotes] = useState(["Proper Note 1", "Proper Note 2", "😀", "",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non."]);

  const [newNote, setNewNote] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const handleInputChange = event => {
    setNewNote(event.target.value);
  }

  const handleAddNote = event => {
    event.preventDefault();
    let noteToAdd = newNote;
    setNotes(notes.concat(noteToAdd));
    setNewNote("");
  }

  const handleDeleteNote = index => {
    let array = [...notes]; // make a separate copy of the array
    array.splice(index, 1);
    setNotes(array);
  }

  const handleMinMax = () => {
    if (isHidden) {
      setIsHidden(false);
    }
    else {
      setIsHidden(true);
    }
  }



  return (<div className="App">
    <section className="mainPageSection">

      <div className="sideView">
        <h3>My notes</h3>
        <hr />
        <NoteList notes={notes} wait={2000} onDelete={handleDeleteNote} />
      </div>

      <div className="dialogWindowView">

        <div className={isHidden ? "quickListView hide" : "quickListView"}>
          <h3 className="listTitle">Append some new notes</h3>
          <div className="list">
            <NoteList notes={notes} wait={1000} onDelete={handleDeleteNote} />
          </div>

          <AddNoteForm
            onSubmit={handleAddNote}
            value={newNote}
            onChange={handleInputChange}
          />
        </div>
        <Icon click={handleMinMax}></Icon>
      </div>

    </section>
  </div>);

}

export default App;
