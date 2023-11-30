// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import { login, putAccessToken } from "../utils/network";
import { Button } from "react-bootstrap";
import FormLoginAndRegis from "../components/FormLoginRegis";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ username, password }).then((response) => {
      console.log(response.data);

      if (!response.error) {
        putAccessToken(response?.data?.token);
        alert(`Welcome ${username}`);
        navigate("/");
      } else {
        alert("Failed: Incorrect Email/Password!");
      }
    });
  }

  const onRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <Card className="bg-light p-5">
        <Card.Body>
          <h1 className="text-center mb-4">Login User</h1>

          <FormLoginAndRegis
            onSubmit={onSubmitHandler}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            isSubmitDisabled={!username || !password}
          />

          {/* Navigate Register */}
          <div className="text-center mt-3">
            <Form.Text className="text-muted">Don't have an account?</Form.Text>
            <Button variant="link" className="text-decoration-none" onClick={onRegisterHandler}>
              <u>Register</u>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginPage;
