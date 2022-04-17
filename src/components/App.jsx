import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes(prev=>[...prev, note]);
  }

  const deleteNote = (id) => {
    setNotes(prev=>prev.filter((elem, i) => (i !== id)));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((n, i) => {
        return <Note 
        delete={deleteNote} 
        key={i} 
        id={i} 
        title={n.title} 
        content={n.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
