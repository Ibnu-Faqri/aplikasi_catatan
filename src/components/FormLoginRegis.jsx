// FormLoginAndRegis.js
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { BsPerson, BsLock } from "react-icons/bs";
import { ButtonDefault, ButtonDisabled } from '../components/Button';

function FormLoginAndRegis({ onSubmit, username, password, setUsername, setPassword, isSubmitDisabled }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formUsername">
        <Row className="align-items-center mb-3">
          <Col xs={1}>
            <BsPerson size={20} />
          </Col>
          <Col xs={10}>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required
              maxLength={50} 
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Row className="align-items-center mb-3">
          <Col xs={1}>
            <BsLock size={20} />
          </Col>
          <Col xs={10}>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
              maxLength={50} 
            />
          </Col>
        </Row>
      </Form.Group>

      {/* Submit Button */}
      <Row className="justify-content-center mb-3">
        <Col xs={10}>
          {username && password ? (
            <ButtonDefault type="submit" block disabled={isSubmitDisabled}>
              Submit
            </ButtonDefault>
          ) : (
            <ButtonDisabled disabled block>
              Submit
            </ButtonDisabled>
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default FormLoginAndRegis;
