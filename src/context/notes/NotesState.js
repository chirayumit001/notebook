import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "61843b7857c009ced9327371",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Not cod",
          "tag": "General",
          "date": "2021-11-04T19:58:24.918Z",
          "__v": 0
        },
        {
          "_id": "61843c12114e86bf7b90024c",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Notcodss",
          "tag": "General",
          "date": "2021-11-04T20:01:19.435Z",
          "__v": 0
        },
        {
          "_id": "61843b7857c009ced9327371",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Not cod",
          "tag": "General",
          "date": "2021-11-04T19:58:24.918Z",
          "__v": 0
        },
        {
          "_id": "61843c12114e86bf7b90024c",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Notcodss",
          "tag": "General",
          "date": "2021-11-04T20:01:19.435Z",
          "__v": 0
        },
        {
          "_id": "61843b7857c009ced9327371",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Not cod",
          "tag": "General",
          "date": "2021-11-04T19:58:24.918Z",
          "__v": 0
        },
        {
          "_id": "61843c12114e86bf7b90024c",
          "user": "6183e00af19a0993ddeea4c5",
          "title": "My title",
          "description": "Notcodss",
          "tag": "General",
          "date": "2021-11-04T20:01:19.435Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}

        </NoteContext.Provider>
    )
}

export default NoteState