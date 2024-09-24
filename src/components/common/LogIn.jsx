import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LogIn = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
      reset();
  handleClose();
  };
 

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="correoElectronico">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="juanperez@gmail.com"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de correo no válido",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Holamund0"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "La contraseña debe contener al menos una letra y un número",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            <Button variant="primary" type="submit">Iniciar Sesión</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogIn;