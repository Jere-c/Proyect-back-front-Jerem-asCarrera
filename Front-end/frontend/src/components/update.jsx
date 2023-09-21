import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(null);

    
    useEffect(() => {
        setId(localStorage.getItem('Id'))
        setUsername(localStorage.getItem('Username'));
        setPassword(localStorage.getItem('Password'));
        setEmail(localStorage.getItem('Email'))
}, []);
const handleUpdate=()=>{
    axios.put(`http://localhost:3000/api/users/${id}`,{
        username,
        password,
        email
    })
    .then((res)=>{
        navigate('/')
        alert('Se actualizó')
    })
}
const navigate=useNavigate();

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Ingresa el nombre de Usuario</label>
                    <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contraseña</label>
                    <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={handleUpdate}>Actualizar</Button>
            </Form>
        </div>
    )
}

export default Update
