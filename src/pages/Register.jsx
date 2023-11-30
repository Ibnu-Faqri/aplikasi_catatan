// RegisterPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";
import { Card, Form, Button } from "react-bootstrap";
import FormLoginAndRegis from "../components/FormLoginRegis";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ username, password }).then((response) => {
      if (!response.error) {
        alert("Success! Please login");
        console.log(`Successfully created a new account! username: ${username}, password: ${password} `);
        navigate("/login");
      } else {
        alert("Failed to create an account!");
      }
    });
  };

  const onLoginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
    <Card className="bg-light p-5">
    <Card.Body>
        <div className="bg-violet-300 shadow-lg rounded-lg p-4 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-7">Register User</h1>

        {/* FormLoginAndRegis component */}
        <FormLoginAndRegis
          onSubmit={onSubmitHandler}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          isSubmitDisabled={!username || !password}
        />

        {/* Navigate to Login */}
        <div className="text-center mt-3">
            <Form.Text className="text-muted">Already have an account?</Form.Text>
            <Button variant="link" className="text-decoration-none" onClick={onLoginHandler}>
              <u>Login</u>
            </Button>
          </div>
        </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterPage;
