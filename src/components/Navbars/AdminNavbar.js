import React, { useState, useEffect } from "react";
import { useLocation, useHistory  } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import routes from "routes.js";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return ;
  };
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token'); 
    localStorage.removeItem('instituicaoNome');
    localStorage.removeItem('role');
    localStorage.removeItem('birthDate');
    localStorage.removeItem('cpf');
    localStorage.removeItem('username'); // Remova o nome do usuário do localStorage
    setUsername(""); // Limpe o estado do nome do usuário
    history.push('/login'); // Redirecione o usuário para a página de login
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">

          <Button
            variant="dark"
            className="d-lg-none d-flex justify-content-center align-items-center"
            onClick={mobileSidebarToggle}
            style={{
              backgroundColor: 'rgba(62, 64, 149, 0.5)',
              border: 'none',
              padding: '15px', 
              borderRadius: '20%'  
            }}
          >
            <FontAwesomeIcon icon={faGears} style={{ color: "#0d0e20", fontSize: '25px' }} /> 
          </Button>




            
            <Navbar.Brand
              href="#home"
              onClick={(e) => e.preventDefault()}
              className="mr-2"
              style={{ fontSize: '30px' }}
            >
              {getBrandText()}
            </Navbar.Brand>
          </div>
          <Nav className="ml-auto" navbar>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                Conta
              </Dropdown.Toggle>
              <Dropdown.Menu align="right">
                <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                  <img
                    src="https://imgur.com/bKBzhbN.png"
                    alt="User"
                    style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '10px' }}
                  />
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{username}</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={handleLogout}
              >
                <span className="no-icon">Sair</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;