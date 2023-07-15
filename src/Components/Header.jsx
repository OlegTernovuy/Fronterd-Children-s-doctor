import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/features/auth/authSlice";
import "./Header.css";
import SidePhonePanel from "./phone";
import { toast } from "react-toastify";

const Header = ({ isAuth, isAdministrator, isSetDoctor }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Ви вийшли з системи");
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="0" as={Link} to="/" className="doc">
              Doctor
            </Nav.Link>
          </Navbar.Brand>
          <SidePhonePanel />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to="/addVac">
                Вакцинація
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/declaration">
                Декларація
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/price">
                Послуги
              </Nav.Link>
              {isAuth ? (
                <>
                  {isAdministrator && (
                    <>
                      <NavDropdown title="Мій кабінет" id="basic-nav-dropdown">
                        <NavDropdown.Item
                          eventKey="5"
                          as={Link}
                          to="/onlineappoint"
                        >
                          Записи
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          eventKey="6"
                          as={Link}
                          to="/statistics"
                        >
                          Статистика
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  )}
                  {isSetDoctor && (
                    <>
                      <NavDropdown title="Мій кабінет" id="basic-nav-dropdown">
                        <NavDropdown.Item
                          eventKey="5"
                          as={Link}
                          to="/onlineappoint"
                        >
                          Записи
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  )}
                  <Nav.Link
                    eventKey="4"
                    as={Link}
                    to="/"
                    onClick={() => handleLogOut()}
                  >
                    Вийти
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link eventKey="6" as={Link} to="/loginPage">
                    Увійти
                  </Nav.Link>
                </>
              )}
            </Nav>
            <div className="workSchedule">
              <div className="scheduleIcon">
                <img
                  src={require("../images/time-outline (1).svg").default}
                  height={20}
                  width={20}
                />
              </div>
              ПН-ПТ: 9.00 – 17.00
            </div>
            <div className="phone">
              <div className="phoneIcon">
                {" "}
                <img
                  src={require("../images/call.svg").default}
                  height={20}
                  width={20}
                />
              </div>
              098-119-45-89
            </div>
            <div className="address">
              <div className="addressIcon">
                <img
                  src={require("../images/location-outline.svg").default}
                  height={20}
                  width={20}
                />
              </div>
              м. Кременець, вул.107 Кременецької дивізії, 41
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
