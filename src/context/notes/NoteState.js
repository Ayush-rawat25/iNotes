import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "https://inotes-backend-tm49.onrender.com"
    const notesInitial=[]
      const [notes, setnotes]=useState(notesInitial);
      //Get all Note
      const getallnotes = async() => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        const json = await  response.json()
        setnotes(json);
      }

      //Add a Note
      const addNote = async(title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        const note = {
          "_id": json._id,
          "user": json.user,
          "title": title,
          "description": description,
          "tag": tag,
          "date": json.date,
          "__v": 0
        };
        setnotes(notes.concat(note))
      }

      //Delete a Note

      const deleteNote = async(id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        const newNote= notes.filter((note)=>{return note._id!==id});
        setnotes(newNote);
      }

      //Edit a Note

      const editNote = async(id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        // Logic to edit in client
        let newNote = JSON.parse(JSON.stringify(notes))
        for(let i=0; i<newNote.length;i++){
          const element = newNote[i];
          if(element._id===id){
            newNote[i].title = title;
            newNote[i].description = description;
            newNote[i].tag=tag;
            break;
          }
        }
        setnotes(newNote);
      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getallnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
