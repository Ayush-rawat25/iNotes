import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import '../index.css';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex">
      <div className="card shadow-sm w-100 h-100 border border-light-subtle rounded-3">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'12px'}}><span className="badge rounded-pill bg-warning">{note.tag}</span></div>
            <h5 className="card-title fw-semibold mb-2"><u>{note.title}</u></h5>
            <p className="card-text text-secondary" style={{ fontSize: "0.95rem" }}>
              {note.description}
            </p>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary me-2"
              title="Edit"
              onClick={() => updateNote(note)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              title="Delete"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            >
              <i className="fa-solid fa-square-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
