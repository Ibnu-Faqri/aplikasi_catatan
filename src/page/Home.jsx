// Home.js
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home({ notes, handleDelete, search, handleSearch }) {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Row className="mt-4">
        <Col className='mb-4'>
        <Link to="/addnote">
            <Button variant="primary">Add Note</Button>
        </Link>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="searchTitle">
              <Form.Control
                type="text"
                placeholder="Search by title"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredNotes.map((note, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{note.createdAt}</Card.Subtitle>
                <Card.Text>{note.body}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
