import Menu from "./components/common/Menu.jsx";
import Index from "./components/pages/Index.jsx";
import Footer from "./components/common/Footer.jsx";
import CardProducto from "./components/pages/CardProducto.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Administrador from "./components/pages/Administrador.jsx";
import FormularioProducto from "./components/pages/FormularioProducto.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404.jsx";


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = { <Index></Index>}></Route>
      <Route path="/Administrador" element = { <Administrador></Administrador>}></Route>
      <Route path="/administrador/crear" element = { <FormularioProducto></FormularioProducto>}></Route>
      <Route path="/administrador/editar" element = { <FormularioProducto></FormularioProducto>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
