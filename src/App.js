// @ts-nocheck
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Formation from "./components/content/formation/Formation";
import Login from "./components/Login";
import Register from "./components/content/register/Register";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <div className="overflow-hidden">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/course/*" exact element={<Formation />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
