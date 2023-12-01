// pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus,FaSearch   } from "react-icons/fa";
import NoteList from "../components/NoteList";
import { deleteAccesToken, deleteNote, getNotes } from "../utils/network";

const HomePage = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) => {
    return note.body.toLowerCase().includes(search.toLowerCase()) ||
    note.title.toLowerCase().includes(search.toLowerCase());
  });

  const onHandleSearchNote = (event) => {
    setSearch(event.target.value);
  };

  const onHandleDeleteNote = async (id) => {
    const { error } = await deleteNote(id);
    if (error) {
      alert("Gagal menghapus catatan dari server!");
      console.error(`Error deleting note with id ${id}`);
    } else {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };
  

const handleLogoutButton = () => {
  deleteAccesToken();
  navigate("/login");
};

useEffect(() => {
  const fetchData = async () => {
    const { error, data } = await getNotes();

    if (error) {
      alert("Error mengambil data dari database!");
      console.log(`Error: ${error}`);
    } else {
      setNotes(data);
    }
  };

  fetchData();
}, []);

  return (
    <div className="container mx-auto min-h-screen">
      <Row className="justify-content-center mt-4 mb-3">
      <Col >
          <Button
            onClick={handleLogoutButton}
            variant="danger"
            className="mb-3"
          >Logout</Button>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <FormControl
              value={search}
              onChange={(event) => onHandleSearchNote(event)}
              type="text"
              placeholder="Ketik di sini untuk mencari catatan"
            />
            <InputGroup.Text><FaSearch /></InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={3}>
          <Button
            onClick={() => navigate("/add-note")}
            variant="primary"
            className="ml-3 mb-3"
          >
            <FaPlus />
            Tambah Catatan
          </Button>
        </Col>
      </Row>
      <div>
        <NoteList notes={filteredNotes} onDelete={onHandleDeleteNote} />
      </div>
    </div>
  );
};

export default HomePage;
