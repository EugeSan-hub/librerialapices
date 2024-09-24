import Menu from "./components/common/Menu.jsx";
import Index from "./components/pages/Index.jsx";
import Footer from "./components/common/Footer.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import FormularioProducto from "./components/pages/FormularioProducto.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/common/LogIn.jsx";
import { useState } from "react"; // Importar useState para manejar el estado del modal
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
   // Estado para controlar la visibilidad del modal
   const [showModal, setShowModal] = useState(false);

   // Funciones para abrir y cerrar el modal
   const handleShow = () => setShowModal(true);
   const handleClose = () => setShowModal(false);
  return (
   

    <BrowserRouter>
      <Menu handleShow={handleShow}></Menu>

      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/Administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<FormularioProducto></FormularioProducto>}
        ></Route>
        <Route
          path="/administrador/editar"
          element={<FormularioProducto></FormularioProducto>}
        ></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
      </Routes>
      <Footer></Footer>
        {/* Modal para iniciar sesión */}
        <LogIn show={showModal} handleClose={handleClose} />
    </BrowserRouter>
  );
}

export default App;
