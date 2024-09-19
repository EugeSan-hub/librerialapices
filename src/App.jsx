import Menu from "./components/common/Menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <BrowserRouter>
      <Menu></Menu>
      </BrowserRouter>
  )
}

export default App
