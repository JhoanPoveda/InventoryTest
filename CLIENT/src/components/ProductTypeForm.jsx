import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import { createProductsType } from '../api/service.api';
import { useState } from "react";
import { Link } from 'react-router-dom';


export function ProductTypeForm() {

    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [selectedState, setSelectedState] = useState('activo'); // Estado inicial

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const description = document.getElementById("description").value;
        const state = selectedState; 
    
        const data = {
            description: description,
            state: state
        };
    
        createProductsType(data)
          .then((response) => {
              document.getElementById("description").value = '';
              setSelectedState('activo'); // Restablecer el estado del dropdown
              setShowSuccessToast(true);
              setTimeout(() => {
                setShowSuccessToast(false); 
              }, 2000);
          })
          .catch((error) => {
              console.error("Error al registrar el tipo de producto:", error); 
          });
    
      };
    

  return (
    <div style={{paddingLeft: "35%"}}>
    <Card className="mb-3" style={{width : "50%"}}>
      <Card.Header>
        <Card.Title>Registro de nuevo producto</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" id="description" placeholder="Tipo de producto"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    {selectedState} 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSelectedState('activo')}>Activo</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedState('inactivo')}>Inactivo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Button className="boton" variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Card.Body>
    </Card>
    {showSuccessToast && (
        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex:"100000"}}>
          <div className="toast-header">
            <strong className="me-auto">Exito!</strong>
          </div>
          <div className="toast-body">
               Tipo de producto registrado de forma correcta.
          </div>
        </div>
      )}
        <Link to="/Inventorys">Registrar inventario</Link>
    </div>
  );
}
