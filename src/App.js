import React, { Component } from 'react';
import NoteListItem from "./Components/NoteListItem/NoteListItem";
import Icon from "./Components/Icon/Icon";
import Input from "./Components/Input/Input";
import Delay from "react-delay";
import './App.css';



class App extends Component {

  state = {
    notes: ["Note 1", "Note 2"],
    newNoteValue: "",
    isHidden: true
  }


  handleInputChange = event => {
    this.setState({ newNoteValue: event.target.value })
  }

  handleAddNote = event => {
    event.preventDefault();
    let noteToAdd = this.state.newNoteValue;
    this.setState({ notes: this.state.notes.concat(noteToAdd), newNoteValue: "" });
  }

  handleDeleteNote = index => {
    let array = [...this.state.notes]; // make a separate copy of the array
    array.splice(index, 1);
    this.setState({ notes: array });
  }

  handleMinMax = () => {
    if (this.state.isHidden) {
      this.setState({ isHidden: false })
    }
    else {
      this.setState({ isHidden: true })
    }
  }

  render() {

    return (<div className="App">
      <section className="mainPageSection">

        <div className="sideView">
          <h3>My notes</h3>
          <hr/>
          {this.state.notes.map((note, index) =>
            <Delay wait={2000}>
              <NoteListItem key={index} delete={() => this.handleDeleteNote(index)}>{note}
              </NoteListItem>
            </Delay>)}
        </div>

        <div className="dialogWindowView">

          <div className={this.state.isHidden ? "quickListView hide" : "quickListView"}>
            <div className="list">
              {this.state.notes.map((note, index) =>
                <Delay wait={1000}> <NoteListItem key={index} delete={() => this.handleDeleteNote(index)}>{note}</NoteListItem> </Delay>)}
            </div>

            <form onSubmit={this.handleAddNote} className="addNoteForm">
              <Input
                type="text"
                value={this.state.newNoteValue}
                required
                placeholder="Add a note"
                onChange={this.handleInputChange}>
              </Input>
              <Input type="submit" value="Submit" placeholder="Add to list"></Input>
            </form>

          </div>
          <Icon click={this.handleMinMax}></Icon>
        </div>

      </section>
    </div>);
  }
}

export default App;
