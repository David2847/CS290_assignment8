import React from 'react';
import '../App.css';
import OrderRow from './OrderRow.jsx';

function OrderTable({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <OrderRow item={item}/>
                ))}
            </tbody>
        </table>
    );
} 

export default OrderTable;