import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from "react";
import { createInventory} from '../api/service.api';
import './style/styles.css';

export function InvetoryForm(props) {

  InvetoryForm.propTypes = {
    productTypes: PropTypes.array.isRequired, 
  };

  const productTypes = props.productTypes; 

  const [selectedProductType, setSelectedProductType] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [formValid, setFormValid] = useState(false); // Estado para validar el formulario


  const handleSelect = (productTypes) => {
    setSelectedProductType(productTypes); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user_name = document.getElementById("user").value;
    const serialNumber = document.getElementById("serial").value; 
    const date_registerd = document.getElementById("date_registerd").value;

    const inventoryData = {
        user_name: user_name,
        product_type: selectedProductType.id,
        serial_number: serialNumber,
        date_registerd: date_registerd
  };

  createInventory(inventoryData)
      .then((response) => {
          console.log("Inventario registrado correctamente:", response.data); 
          document.getElementById("user").value = '';
          document.getElementById("serial").value = '';
          document.getElementById("date_registerd").value = '';
          setSelectedProductType(null);
          setFormValid(false);
          setShowSuccessToast(true);
          setTimeout(() => {
            setShowSuccessToast(false); 
          }, 2000);
      })
      .catch((error) => {
          console.error("Error al registrar el inventario:", error); 
      });

};
const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputId = event.target.id;
    
    // Validación de campos
    if (inputId === 'user' && inputValue.trim() !== '') {
        document.getElementById('user_error').style.display = 'none';
    } else if (inputId === 'user' && inputValue.trim() === '') {
        document.getElementById('user_error').style.display = 'block';
    }
    if (inputId === 'serial' && inputValue.trim() !== '') {
        document.getElementById('serial_error').style.display = 'none';
    } else if (inputId === 'serial' && inputValue.trim() === '') {
        document.getElementById('serial_error').style.display = 'block';
    }
    if (inputId === 'date_registerd' && inputValue.trim() !== '') {
        document.getElementById('date_error').style.display = 'none';
    } else if (inputId === 'date_registerd' && inputValue.trim() === '') {
        document.getElementById('date_error').style.display = 'block';
    }
    
        // Verificar si todos los campos están válidos
    const isValid = 
        document.getElementById('user').value.trim() !== '' &&
        document.getElementById('serial').value.trim() !== '' &&
        document.getElementById('date_registerd').value.trim() !== '' &&
        selectedProductType !== null;
    
    setFormValid(isValid); // Actualizar el estado de validación del formulario
    };

  return (
    <div>
    <Card className="mb-3">
      <Card.Header>
        <Card.Title>Registro de inventario</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" id="user" placeholder="Nombre de usuario" onChange={handleInputChange}/>
            <span id="user_error" style={{ display: 'none', color: 'red' }}>Este campo es requerido.</span> 
          </Form.Group>
          <div className="row justify-content-start">
            <div className="col-4">
            <Form.Group className="mb-3">
                <Dropdown >
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {selectedProductType ? selectedProductType.description : 'Productos'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {productTypes.map((productType) => (
                    <Dropdown.Item
                        key={productType.id}
                        onClick={() => handleSelect(productType)}
                    >
                        {productType.description}
                    </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            </div>
            <div className="col-6">
            <Form.Group className="mb-3">
                <Form.Control className='number_serial' type="number" id="serial" placeholder="Número de serie" onChange={handleInputChange} />
                <span id="serial_error" style={{ display: 'none', color: 'red' }}>Este campo es requerido.</span> 
            </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Control type="date" id="date_registerd" onChange={handleInputChange}/>
            <span id="date_error" style={{ display: 'none', color: 'red' }}>Este campo es requerido.</span> 
          </Form.Group>
          <Button className="boton" variant="primary" type="submit" disabled={!formValid}>
            Guardar y enviar
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
               Inventario registrado de forma correcta.
          </div>
        </div>
      )}
    </div>
  );
}