// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AddNote from './page/AddNote';
import Home from './page/Home';

function App() {
  const [notes, setNotes] = useState([
    { title: 'joging', body: 'Sore joging sama kawan', createdAt: '11/15/2023' },
    { title: 'berenang', body: 'Minggu berenang sore sore', createdAt: '11/15/2023' },
    { title: 'Naik Gunung', body: 'Hari kamis ke gunung burni telong sama kawan', createdAt: '11/15/2023' },
  ]);

  const [search, setSearch] = useState('');

  function handleDelete(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  function handleSearch(value) {
    setSearch(value);
  };

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  };

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={<Home notes={notes} handleDelete={handleDelete} search={search} handleSearch={handleSearch} />}
      />
      <Route path="/addnote" element={<AddNote addNote={addNote} />} />
    </Routes>
  </Router>
  );
};

export default App;
