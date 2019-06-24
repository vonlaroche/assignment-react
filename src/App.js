import React, { Component } from 'react';
import NoteListItem from "./Components/NoteListItem/NoteListItem";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import './App.css';


class App extends Component {

  state = {
    notes: ["Note 1", "Note 2"],
    newNoteValue: ""
  }


  handleInputChange = event => {
    this.setState({ newNoteValue: event.target.value })
  }

  handleAddNote = event => {
    event.preventDefault();
    let noteToAdd = this.state.newNoteValue;
    setTimeout(() => {
      this.setState({ notes: this.state.notes.concat(noteToAdd) });
    }, 1000)
    
  }

  handleDeleteNote = index => {
    let array = [...this.state.notes]; // make a separate copy of the array
    array.splice(index, 1);
    this.setState({ notes: array });
  }


  render() {

    let notesArr = this.state.notes.map((note, index) => <NoteListItem key={index} delete={() => this.handleDeleteNote(index)}>{note}</NoteListItem>);

    return (<div className="App">
      <section className="mainPageSection">

        <div className="sideView">
            { notesArr }
        </div>

        <div className="dialogWindowView">
          <div className="quickListView">
            <div className="list">
              {notesArr} 
            </div>

            <form onSubmit={this.handleAddNote} className="addNoteForm">
              <Input
                type="text"
                className="addNoteInput"
                value={this.state.newNoteValue}
                required
                placeholder="Add a note"
                onChange={this.handleInputChange}>
              </Input>
              <Input type="submit" value="Submit" className="addNoteBtn" placeholder="Add to list"></Input>
            </form>

          </div>
          <Button>Minimze/Maximize</Button>
        </div>

      </section>
    </div>);
  }
}

export default App;
