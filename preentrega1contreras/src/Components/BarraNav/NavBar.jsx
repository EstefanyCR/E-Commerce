import React, { useState } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import "../BarraNav/NavBar.css";

import CarritoImg from "../CartWidget/CartWidget";
import Search from "../SerchWiget/SerchW";
import IconUser from "../UserWidget/UserW";
import image from "../mixup.png";
import { Link } from "react-router-dom";

export default function NavBar({ categorias }) {
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
            {categorias.map(({ nombre, id }) => (
              <NavLink>
                <Link to={id} className="link-nav">
                  {nombre}
                </Link>
              </NavLink>
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
