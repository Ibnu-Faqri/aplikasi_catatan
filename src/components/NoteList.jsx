import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const NoteList = ({ notes, onDelete }) => {
  const cardColors = ["primary", "success", "danger", "warning", "info", "secondary"];

  // Tentukan jumlah kolom berdasarkan jumlah data
  const numberOfCols = notes.length < 3 ? notes.length : 4;

  const currentDate = new Date();
  const formattedDated = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <Row xs={1} md={numberOfCols} className="g-4">
      {notes.map((note, index) => (
        <Col key={index}>
          <Card className={`mb-3 bg-${cardColors[index % cardColors.length]} text-light`}>
            <Card.Body>
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.body}</p>
              <p className="card-text">
                <small className="text-muted">{formattedDated}</small>
              </p>
              <Button onClick={() => onDelete(note.id)} variant="light">Hapus</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NoteList;
