import React, { useState } from 'react';
import axios from 'axios';

const DatosRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`/api/usuarios/{userId}`, {
                nombre,
                apellido,
                email
            });
            setMessage('Datos actualizados correctamente');
        } catch (error) {
            setMessage('Error al actualizar los datos');
        }
    };

    return (
        <div>
            <h2>Actualizar Datos de Registro</h2>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
            />
            <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                placeholder="Apellido"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleUpdateUser}>Actualizar</button>
            <p>{message}</p>
        </div>
    );
};

export default DatosRegistro;
