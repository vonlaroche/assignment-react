import React, { Component } from 'react';
import NoteLi from "./Components/NoteLi/NoteLi";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import './App.css';

class App extends Component {

  state = {
    notes: ["Note 1", "Note 2"]
  }


  render() {

    const notesArr = this.state.notes.map(note => <NoteLi>{note}</NoteLi>);



    return (<div className="App">
      <section className="mainPageSection">

        <div className="sideView">
          {notesArr}
        </div>

        <div className="dialogWindowView">
          <div className="quickListView">
            <div className="list">
              {notesArr}
            </div>

            <div className="addNoteForm">
              <Input type="text" className="addNoteInput" required placeholder="Add a note"></Input>
              {/* <input type="text" className="addNoteInput" required placeholder="Add a note" /> */}
              {/* <input type="submit" className="addNoteBtn" placeholder="Add to list" /> */}
              <Input type="submit" className="addNoteBtn" placeholder="Add to list"></Input>
            </div>

          </div>
          <Button>Minimze/Maximize</Button>
        </div>

      </section>
    </div>);
  }
}

export default App;
