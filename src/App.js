import logo from './logo.svg';
import React from 'react';
import './App.css';

const Note = (props) => {
  const {title, body, createdAt, backgroundColor} = props;
  const noteStyle = {
    backgroundColor,
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.2)",
  };
  return (
    <div className="card mb-3" style={noteStyle}>
      <div className="card-body bg-warning">
          <h5 className='card-title'>{title}</h5>
          <p className="card-text">{body}</p>
        </div>
        <h6 className="card-footer text-body-secondary">CreatedAt: {createdAt}</h6>
      </div>
  );
}

function App() {
  const Name = 'Ibnu';
  const notesData = [
    {
      title: "Joging",
      createdAt: "2023-11-11",
      body: "Besok joging bersama kawan",
      backgroundColor: "#FDE74C"
    },
    {
      title: "Berenang",
      createdAt: "2023-11-12",
      body: "Besoknya lagi berenang sama kawan",
      backgroundColor: "#6CA0F7"
    },
    {
      title: "Nugas",
      createdAt: "2023-11-13",
      body: "Besoknya lagi ngerjain tugas",
      backgroundColor: "#FF7E67"
    }];

  return (
    <div className="App">
      <h1>Catatan {Name}</h1>
      {
        <div className='container mt-5'>
          <div className="row">
          <Note {...notesData[0]} />
          <Note {...notesData[1]} />
          <Note {...notesData[2]} />
          </div>
        </div>
      }
    </div >
  );
}

export default App;
