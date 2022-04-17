import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "" 
  });

  const handleChanges = (event) => {
    const {name, value} = event.target;
    setNote((prev) => ({...prev, [name]: value}))
  }

  const onSubmit = (e) => {
    props.onAdd(note);
    setNote({
        title: "",
        content: "" 
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChanges} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChanges} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
