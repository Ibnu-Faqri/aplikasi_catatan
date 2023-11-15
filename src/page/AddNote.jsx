// AddNote.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddNote({addNote}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [submittedDate, setSubmittedDate] = useState(null);

  useEffect(() => {
    // memeriksa apakah keduanya tidak kosong. membantu memastikan bahwa jika pengguna hanya memasukkan spasi atau karakter whitespace, itu tidak akan dianggap sebagai input yang valid
    setIsFormValid(title.trim() !== '' && body.trim() !== '');
  }, [title, body]);

  const handleSubmit = () => {
    if (isFormValid){
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
      
      addNote({ title, body, createdAt: formattedDate });
      setSubmittedDate(formattedDate);
      setTitle('');
      setBody('');
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <Form>
            <Form.Group controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="isi title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="noteBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="isi body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>

            {/*  Ini Cara kak farhan = 
             {title.length > 4 ? (
              <Button variant="primary" onClick={handleSubmit} type='submit'>
              Submit
            </Button>
            ) : (<Button variant="danger" onClick={handleSubmit} disabled type='submit'>
            Submit
          </Button>)} */}
          
          <Row className="mt-4">
          <Col xs={3}>
            <Button variant="primary" onClick={handleSubmit} disabled={title.length <= 4 || !isFormValid}>
              Submit
            </Button>
          </Col>
          <Col >
            <Link to="/">
              <Button variant="secondary">
                Home
              </Button>
            </Link>
          </Col>
          </Row>
          </Form>
        </Col>
      </Row>
      {submittedDate && (
        <Row className="mt-4">
          <Col>
            <p>Di submit pada tanggal: {submittedDate}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AddNote;
