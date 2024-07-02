import React, { useState } from 'react';
import axios from 'axios';

const CambiarPassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = async () => {
        try {
            const response = await axios.put(`/api/usuarios/{userId}/cambiar-password`, { password: newPassword });
            setMessage('Contraseña actualizada correctamente');
        } catch (error) {
            setMessage('Error al actualizar la contraseña');
        }
    };

    return (
        <div>
            <h2>Cambiar Contraseña</h2>
            <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Contraseña antigua"
            />
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nueva contraseña"
            />
            <button onClick={handleChangePassword}>Cambiar</button>
            <p>{message}</p>
        </div>
    );
};

export default CambiarPassword;