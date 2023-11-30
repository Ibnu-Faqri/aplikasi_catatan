import React from 'react';
import { Link } from "react-router-dom";
import { Button, Row } from 'react-bootstrap';
import { ButtonDefault, ButtonDisabled } from './Button';

const Form = ({ onSubmit, onChange, title, createdAt, body }) => {
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
      <div className="mb-3">
        <label className="text-base text-purple-800">Judul:</label>
        <input
          onChange={(event) => onChange('title', event.target.value)}
          type="text"
          value={title}
          placeholder="Contoh: Ngapain gitu"
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="text-base text-purple-800">Tanggal:</label>
        <input
          onChange={(event) => onChange('createdAt', event.target.value)}
          type="date"
          value={createdAt}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="text-base text-purple-800">Isi Catatan:</label>
        <textarea
          onChange={(event) => onChange('body', event.target.value)}
          type="text"
          value={body}
          rows={4}
          required
          className="form-control"
        />
      </div>

      {title && createdAt && body ? (
        <ButtonDefault type="submit">
          Submit
        </ButtonDefault>
      ) : (
        <ButtonDisabled variant="secondary" disabled>
          Submit
        </ButtonDisabled>
      )}
      <Row>
        <Link to="/">
              <Button variant="secondary">
                Home
              </Button>
            </Link>
      </Row>
    </form>
  );
};

export default Form;
