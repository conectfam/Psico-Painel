import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Container, Row, Col , Pagination} from 'react-bootstrap';
import axios from 'axios';
import './NR2.css'; 
import NotificationAlert from "react-notification-alert";

const NR2 = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const notificationAlert = React.createRef(); // Added for pagination
  const itemsPerPage = 5; // Added for pagination

  // Pagination logic
  const totalPages = Math.ceil(usuarios.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usuarios.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    'nomecompleto', 'email', 'data_de_nascimento', 'genero', 'telefone', 'telefone2', 'cpf', 'cnpj',
    'matricula', 'observacoes', 'endereco', 'numero', 'complemento', 'bairro', 'cidade', 'estado',
    'pais', 'cep', 'unidade', 'setor', 'cargo', 'instituicao', 'senha', 'acesso'
  ];
  


  
  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = () => {
    // Retrieve the institution name from localStorage
    const instituicaoNome = localStorage.getItem('instituicaoNome');

    // Make API request with the institution name as a parameter
    axios.get(`https://bored-cuff-links-foal.cyclic.app/usuarios?instituicaoNome=${encodeURIComponent(instituicaoNome)}`)

    .then(response => {
        if (response.data && Array.isArray(response.data)) {
            setUsuarios(response.data);
        } else {
            console.error("Unexpected data format:", response.data);
        }
    })
    .catch(error => {
        console.error("API Error:", error);
    });
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(usuarios[index]);
  };

  const notify = (message, type) => {
    if (notificationAlert.current) {
      var options = {
        place: "tr",
        message: (
          <div>
            <div>{message}</div>
          </div>
        ),
        type: type,
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 7,
      };
      notificationAlert.current.notificationAlert(options);
    }
  };
  

const handleSave = () => {
  
  
  
    axios.put(`https://bored-cuff-links-foal.cyclic.app/cadastro_clientes/${editData.id}`, editData)
      .then(response => {
        console.log(response.data);
        setEditIndex(-1);
        carregarUsuarios();
        notify("Usuário cadastrado com sucesso!", "success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://bored-cuff-links-foal.cyclic.app/usuarios/${id}`)
      .then(response => {
        console.log(response.data);
        carregarUsuarios();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setEditIndex(-1);
    setEditData({});
  };

  const handleChange = (e, field) => {
    const { value } = e.target;
    setEditData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleUserSelection = (index) => {
    setSelectedUser(index);
  };

  return (
    <Container fluid>
      <Row>
      <Col md={12} className="form-col rounded">
      <h1>Administração de Usuários para {localStorage.getItem('instituicaoNome')}</h1>
      <p>Selecione o Usuário na tabela abaixo e vejas suas informações com opção de edição.</p>
      <Table striped bordered hover className="user-selection-table mb-4">
        <thead>
          <tr>
            <th>Selecione um Usuário:</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((usuario, index) => (
            <tr key={index} onClick={() => handleUserSelection(indexOfFirstItem + index)} className="clickable-row">
              <td>{usuario.nomecompleto}</td>
            </tr>
            
          ))}
        </tbody>
      </Table>
      <div className="pagination-wrapper">
        <Pagination>
          {[...Array(totalPages).keys()].map(page => (
            <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => setCurrentPage(page + 1)}>
              {page + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      </Col>
      </Row>
      {selectedUser !== null && (
        <Row className="mb-4">
          <Col md={12} className="form-col rounded">
            <Table striped bordered hover>
              <tbody>
              {columns.map((column, colIndex) => (
                <tr key={colIndex}>
                  <th>{column.charAt(0).toUpperCase() + column.slice(1)}</th>
                  <td>
                    {editIndex === selectedUser ? (
                      column === "acesso" ? (
                        <Form.Control as="select" value={editData[column] || ''} onChange={e => handleChange(e, column)}>
                          <option value="Paciente">Paciente</option>
                          <option value="Médico">Médico</option>
                        </Form.Control>
                      ) : (
                        <Form.Control
                          type="text"
                          value={editData[column] || ''}
                          onChange={e => handleChange(e, column)}
                        />
                      )
                    ) : (
                      usuarios[selectedUser] && usuarios[selectedUser][column] // Certifique-se de que 'column' corresponde à chave no objeto 'usuario'
                    )}
                  </td>
                </tr>
              ))}

              </tbody>
            </Table>
            {editIndex === selectedUser ? (
              <div>
                <Button variant="success" style={{ backgroundColor: "#3E4095", borderColor: "#3E4095" }} onClick={handleSave}>Salvar</Button>
                <Button variant="warning" style={{ backgroundColor: "#3E4095", borderColor: "#3E4095" }} onClick={handleCancel}>Cancelar</Button>
              </div>
            ) : (
              <div>
                <Button variant="primary" style={{ backgroundColor: "#3E4095", borderColor: "#3E4095" }} onClick={() => handleEdit(selectedUser)}>Editar</Button>
                <Button variant="danger" style={{ backgroundColor: "#3E4095", borderColor: "#3E4095" }} onClick={() => handleDelete(usuarios[selectedUser].id)}>Deletar</Button>
        
              </div>
            )}
          </Col>
        </Row>
      )}
      <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlert} />
        </div>
    </Container>
  );
};

export default NR2;
