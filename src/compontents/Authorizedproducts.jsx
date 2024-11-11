import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi';
import './Authorizedproducts.css';

const AuthorizedProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/api/v1/store/findAll/PENDING')
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  async function buy(event, producto) {  
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/store/save-product/AUTHORIZED", {
        idProductos: producto.idProductos,
        nomProductos: producto.nomProductos,
        productosPrecio: producto.productosPrecio,
        productosCantidad: producto.productosCantidad,
      });
      alert("Compra realizada con éxito");
      // Aquí podrías actualizar la lista de productos en el estado, si es necesario
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Navbar className="mi-barra-de-navegacion" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src="https://cdn-icons-png.flaticon.com/256/8995/8995784.png"
            width="70"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Tienda Gran Colombia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavItem href="/Home">Inicio</NavItem>
            <NavItem href="/Cart_class">
              <BiCart size={30} />
            </NavItem>
            <NavItem href="/Authorizedproducts">Compras Realizadas</NavItem>
          </Nav>
          <Nav className="ms-auto">
            <NavItem href="/" className="ml-auto">
              <strong>Cerrar sesión</strong>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {productos.map((producto) => (
            <Col key={producto.idProductos} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.imageUrl} />
                <Card.Body>
                  <Card.Title>{producto.nomProductos}</Card.Title>
                  <Card.Text>Precio: ${producto.productosPrecio}</Card.Text>
                  <Card.Text>Cantidad: ${producto.productosCantidad}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const NavItem = ({ href, children }) => (
  <Nav.Link href={href}>{children}</Nav.Link>
);

export default AuthorizedProducts;