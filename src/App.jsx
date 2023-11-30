import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Navbar, NavbarLogout } from "./components/Navbar";
import AddNotePage from "./pages/AddNote";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { getAccessToken } from "./utils/network";

function IsAuthenticate() {
  let auth = getAccessToken();
  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="container mx-auto">
      
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<IsAuthenticate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-note" element={<AddNotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;