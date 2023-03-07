import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import "../BarraNav/NavBar.css";

import CarritoImg from "../CartWidget/CartWidget";
import Search from "../SerchWiget/SerchW";
import IconUser from "../UserWidget/UserW";
import image from "../mixup.png";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

export default function NavBar({ categorias }) {
  return (
    <Navbar expand="lg" className="nav">
      <Container className="container">
        <Navbar.Brand>
          <Link to="/">
            <img src={image} alt="Logo mixup" className="imagen" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            {categorias.map(({ nombre, id }) => (
              <RouterNavLink key={id} to={id} className="link-nav">
                {nombre}
              </RouterNavLink>
            ))}
          </Nav>

          <Nav>
            <NavLink>
              <IconUser />
            </NavLink>

            <NavLink>
              <Search />
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
