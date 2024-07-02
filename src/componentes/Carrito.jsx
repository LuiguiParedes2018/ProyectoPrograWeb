import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carrito = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('/api/carrito');
            setItems(response.data);
        };
        fetchItems();
    }, []);

    const handleUpdateQuantity = async (id, cantidad) => {
        await axios.put(`/api/carrito/${id}`, { cantidad });
        setItems(items.map(item => (item.id === id ? { ...item, cantidad } : item)));
    };

    const handleRemoveItem = async (id) => {
        await axios.delete(`/api/carrito/${id}`);
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => handleUpdateQuantity(item.id, item.cantidad + 1)}>+</button>
                    <button onClick={() => handleUpdateQuantity(item.id, item.cantidad - 1)}>-</button>
                    <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default Carrito;
