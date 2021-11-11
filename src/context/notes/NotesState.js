import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);


  //Get all note
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2UwMGFmMTlhMDk5M2RkZWVhNGM1In0sImlhdCI6MTYzNjAzODI0Mn0.NfcoI-WQodyO_6KZL1uDv7f4yROYeSHVyEMm3Lfm3zE'
      },
    });

    const json = await response.json()
    console.log(json)
    setNotes(json)


  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO API call
    //API Call
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
  const deleteNote = async (id) => {
    //TODO API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', 
      
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4M2UwMGFmMTlhMDk5M2RkZWVhNGM1In0sImlhdCI6MTYzNjAzODI0Mn0.NfcoI-WQodyO_6KZL1uDv7f4yROYeSHVyEMm3Lfm3zE'
      },

    });
    const json = response.json(); 
    console.log(json)


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
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
