import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateUsers() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {

    }, []);
    const handleCreate = () => {
            axios.post(`http://localhost:3000/api/users`, {
                username,
                password,
                email
            })
                .then((res) => {
                    navigate('/')
                    alert(`Se creo el usuario ${username}`)
                })
    }
    const navigate=useNavigate();

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Ingresa el nombre de Usuario</label>
                    <input placeholder='Username'  onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Contraseña</label>
                    <input placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={handleCreate}>Crear</Button>
            </Form>
        </div>
    )
}

export default CreateUsers
