import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../helpers/queries";

const FormularioProducto = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
    const productoValidado = async (producto) => {
      console.log(producto);
      //pedir a la api crear un producto
      const respuesta = await crearProductoAPI(producto)
      console.log(respuesta)
    };
  
    return (
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Nuevo producto</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Lapices de colores"
              {...register("nombreProducto", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre del producto",
                },
                maxLength: {
                  value: 100,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre del producto",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Marca*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Cafe"
              {...register("marca", {
                required: "La marca es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.marca?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 50"
              {...register("precio", {
                required: "El precio es obligatorio",
                min: {
                  value: 50,
                  message: "El precio como minimo debe ser de $50",
                },
                max: {
                  value: 1000000,
                  message: "El precio como maximo debe ser de $1000000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Categoría*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "La categoria es obligatoria",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Cuadernos">Cuadernos</option>
              <option value="Lapicera">Lapicera</option>
              <option value="Resaltador">Resaltador</option>
            
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Lápices premium con pigmentos resistentes a la luz"
              as="textarea"
              {...register("descripcion_breve", {
                required: "La descripcion breve del producto es obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "Debe ingresar como minimo 3 caracteres para la descripcion breve",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Debe ingresar como maximo 30 caracteres para la descripcion breve",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripción Amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Los Faber-Castell Polychromos son lápices de colores profesionales con pigmentos de alta calidad y resistencia a la luz."
              as="textarea"
              {...register("descripcion_amplia", {
                required: "La descripcion amplia es obligatoria",
                minLength: {
                  value: 50,
                  message:
                    "Debe ingresar como minimo 50 caracteres para la descripcion amplia",
                },
                maxLength: {
                  value: 1000,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la descripcion amplia",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_amplia?.message}
            </Form.Text>
          </Form.Group>
  
          <Button type="submit" variant="success">
            Guardar
          </Button>
        </Form>
      </section>
    );
  };
  

export default FormularioProducto;