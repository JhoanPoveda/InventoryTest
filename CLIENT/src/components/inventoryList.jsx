import { useEffect, useState } from "react";
import { Card, Row, Col, Button, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getAllInventorys } from "../api/service.api";

export function InventoryList(props) {
  
  InventoryList.propTypes = {
    productTypes: PropTypes.array.isRequired, 
  };
  const productTypes = props.productTypes; 

  const [inventorys, setInventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inventorysPerPage] = useState(2); // Items per page

  useEffect(() => {
    async function loadInventorys() {
      const res = await getAllInventorys();
      console.log(res);
      // Transform data and find corresponding product type
      setInventory(res.data.map(inventory => ({
        ...inventory,
        productType: productTypes.find(type => type.id === inventory.product_type)?.description
      })));
    }
    loadInventorys(); 
  }, [productTypes]);

  // Get current inventory
  const indexOfLastInventory = currentPage * inventorysPerPage;
  const indexOfFirstInventory = indexOfLastInventory - inventorysPerPage;
  const currentInventorys = inventorys.slice(indexOfFirstInventory, indexOfLastInventory);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(inventorys.length / inventorysPerPage);

  return (
    <div>
        <Card className="mb-3">
            <Card.Header>
                <Card.Title>Entregar inventario</Card.Title>
             </Card.Header>
             <Card.Body>
                <Row >
                    {currentInventorys.map((inventory) => (
                        <Col key={inventory.id} md={12}>
                            <Card className="mb-3">
                                <Card.Header>
                                    <Card.Title>{inventory.productType}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <label className="mb-3">Número de serie: {inventory.serial_number}</label>
                                    <Button className="boton" variant="primary" type="submit" >
                                        Guardar y enviar
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination className="mt-3">
                  <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                  <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item key={index + 1} active={currentPage === index + 1} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                  <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
            </Card.Body>
        </Card>
    </div>
  );
}