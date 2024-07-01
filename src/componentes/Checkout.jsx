import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderSummary, setOrderSummary] = useState([]);
    const [message, setMessage] = useState('');

    const handleCheckout = async () => {
        try {
            const response = await axios.post('/api/ordenes', {
                direccionEnvio: address,
                metodoPago: paymentMethod,
                productos: orderSummary
            });
            setMessage('Orden completada correctamente');
        } catch (error) {
            setMessage('Error al completar la orden');
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Dirección de envío"
            />
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="tarjeta">Tarjeta de Crédito</option>
                <option value="qr">Código QR</option>
            </select>
            <button onClick={handleCheckout}>Completar Orden</button>
            <p>{message}</p>
        </div>
    );
};

export default Checkout;
