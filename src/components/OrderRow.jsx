import React from 'react';
import '../App.css';
import SelectQuantity from './SelectQuantity';

function OrderRow({ item }) {
    return (
        <tr key={item.name}>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td><SelectQuantity/></td>
        </tr>
    );
} 

export default OrderRow;