import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [
    {
      _id: "61843b7857c009ced93273711",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Not cod",
      tag: "General",
      date: "2021-11-04T19:58:24.918Z",
      __v: 0,
    },
    {
      _id: "61843c12114e86bf7b90024c2",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Notcodss",
      tag: "General",
      date: "2021-11-04T20:01:19.435Z",
      __v: 0,
    },
    {
      _id: "61843b7857c009ced93273713",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Not cod",
      tag: "General",
      date: "2021-11-04T19:58:24.918Z",
      __v: 0,
    },
    {
      _id: "61843c12114e86bf7b90024c4",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Notcodss",
      tag: "General",
      date: "2021-11-04T20:01:19.435Z",
      __v: 0,
    },
    {
      _id: "61843b7857c009ced93273715",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Not cod",
      tag: "General",
      date: "2021-11-04T19:58:24.918Z",
      __v: 0,
    },
    {
      _id: "61843c12114e86bf7b90024c6",
      user: "6183e00af19a0993ddeea4c5",
      title: "My title",
      description: "Notcodss",
      tag: "General",
      date: "2021-11-04T20:01:19.435Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO API call
    //API Call
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', 
      
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2UwMGFmMTlhMDk5M2RkZWVhNGM1In0sImlhdCI6MTYzNjAzODI0Mn0.NfcoI-WQodyO_6KZL1uDv7f4yROYeSHVyEMm3Lfm3zE'
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const josn = response.json(); 
    console.log("Adding a new note");
    const note = {
      _id: "61843c12114e86bf7b90024c7",
      user: "6183e00af19a0993ddeea4c5",
      title: title,
      description: description,
      tag: tag,
      date: "2021-11-04T20:01:19.435Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = (id) => {
    //TODO API call
    console.log("Deleteing the note " + id);
    const newNotes = (notes.filter((note) => {
      return note._id !== id;
    }));
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST', 
      
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2UwMGFmMTlhMDk5M2RkZWVhNGM1In0sImlhdCI6MTYzNjAzODI0Mn0.NfcoI-WQodyO_6KZL1uDv7f4yROYeSHVyEMm3Lfm3zE'
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const josn = response.json(); 
  
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
      
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
