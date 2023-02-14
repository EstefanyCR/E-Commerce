import React, { useState } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

import CarritoImg from "../CartWidget/CartWidget";
import Search from "../SerchWiget/SerchW";
import IconUser from "../UserWidget/UserW";
import image from "../mixup.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{ maxHeight: "75px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={image} alt="Logo mixup" style={{ maxHeight: "50px" }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink>
              <Link to="/musica" style={{ textDecoration: "none" }}>
                Musica
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/pelisyseries" style={{ textDecoration: "none" }}>
                Peliculas y Series
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/gaming" style={{ textDecoration: "none" }}>
                Gaming
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/audio" style={{ textDecoration: "none" }}>
                Audio
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/coleccionables" style={{ textDecoration: "none" }}>
                Coleccionables
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/moda" style={{ textDecoration: "none" }}>
                Moda
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/electronicos" style={{ textDecoration: "none" }}>
                Electronicos
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/libros" style={{ textDecoration: "none" }}>
                Libros
              </Link>
            </NavLink>

            <NavLink>
              <Link to="/soporte" style={{ textDecoration: "none" }}>
                Soporte
              </Link>
            </NavLink>

            <NavLink>
              <CarritoImg />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
