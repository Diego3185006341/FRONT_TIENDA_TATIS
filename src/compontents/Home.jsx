import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Carousel } from 'react-bootstrap'; 
import { BiCart } from 'react-icons/bi';
import './Home.css'; // Asegúrate de reemplazar con la ruta correcta
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/api/v1/store/findAll')
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  async function addToCart(event, producto) {  
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/store/save-product/PENDING", {
        idProductos: producto.idProductos,
        nomProductos: producto.nomProductos,
        productosPrecio: producto.productosPrecio,
        productosCantidad: producto.productosCantidad,
        image: producto.image,
      });
      alert("Producto añadido al carrito");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <Navbar className="mi-barra-de-navegacion" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src="https://cdn-icons-png.flaticon.com/256/8995/8995784.png" // Reemplaza con la URL de tu logo
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

      {/* Carrusel de imágenes */}
      <Container className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.graficoywebvalencia.es/wp-content/uploads/2022/04/tienda-online-papeleria-bonita.jpg" // Cambia a tu imagen
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bienvenidos a Tienda Gran Colombia</h3>
              <p>Encuentra los mejores productos aquí.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/vector-premium/escuela-venta-herramientas-tienda-publicidad-banner_87720-3341.jpg?semt=ais_hybrid" // Cambia a tu imagen
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Productos exclusivos</h3>
              <p>Solo en nuestra tienda.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static7.depositphotos.com/1177973/679/i/450/depositphotos_6794033-stock-photo-stationery-isolated-on-white.jpg" // Cambia a tu imagen
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Promociones Especiales</h3>
              <p>No te pierdas nuestras ofertas.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Sección de productos */}
      <Container className="mt-4">
        <Row>
          {productos.map((producto) => (
            <Col key={producto.idProductos} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={producto.image} style={{ height: '200px', width: 'auto' }} />
                <Card.Body>
                  <Card.Title>{producto.nomProductos}</Card.Title>
                  <Card.Text>Precio: ${producto.productosPrecio}</Card.Text>
                  <Card.Text>Cantidad: {producto.productosCantidad}</Card.Text>
                  <button className="btn btn-primary" onClick={(event) => addToCart(event, producto)}>
                    Añadir al carrito
                  </button>
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

export default Home;






