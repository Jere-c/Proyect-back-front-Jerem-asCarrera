import axios from 'axios'
import { Table } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'



export default function Read() {

    //funcion para borrar de la api y llamarla nuevamente
    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/api/users/${id}`)
        .then(()=>{
            getUsers();
        })
    }

    const getUsers= () =>{
        axios.get(`http://localhost:3000/api/users`)
        .then((response) => {
            setAPIData(response.data.users);
            console.log(response.data.users)
        })
    }

    //Seteamos los datos al localstorage
    const setData = (users) => {
        let { id, username, password, email } = users;
        localStorage.setItem('Id', id);
        localStorage.setItem('Username', username);
        localStorage.setItem('Password', password);
        localStorage.setItem('Email', email);
    }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/users`)
            .then((response) => {
                setAPIData(response.data.users);
                console.log(response.data.users)
            })
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <div style={{display:'flex', gap:"280%", margin:"20%"}}>
                        <h3>React Crud</h3>
                        <Link to='/createuser'>
                            <button> Agregar Usuario </button>
                        </Link>
                    </div>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Ver publicaciones</Table.HeaderCell>
                        <Table.HeaderCell>Editar</Table.HeaderCell>
                        <Table.HeaderCell>Borrar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((users) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{users.username}</Table.Cell>
                                <Table.Cell>{users.password}</Table.Cell>
                                <Table.Cell>{users.email}</Table.Cell>
                                <Link to="/getposts">
                                <Table.Cell><button>Ver publicaciones</button></Table.Cell>
                                </Link>
                                <Link to='/update'>
                                    <Table.Cell><button onClick={() => setData(users)}>Editar</button></Table.Cell>
                                </Link>
                                <Table.Cell><button onClick={() => onDelete(users.id)}>Borrar</button></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}


