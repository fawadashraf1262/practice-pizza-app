// File: PizzaMenu.js
import React from 'react';
import pizzaData from '../../data/data';
import './Menu.css'

// Create a separate Pizza component to render individual pizzas
const Pizza = ({ pizza }) => {
    return (
        <div className='main'>
            <div className="left">
                <img src={pizza.photoName} alt={pizza.name} width={200} height={200} />
            </div>
            <div className="right">
                <h2>{pizza.name}</h2>
                <p>Ingredients: {pizza.ingredients}</p>
                <p>Price: ${pizza.price}</p>
                <p>Sold Out: {pizza.soldOut ? 'Yes' : 'No'}</p>
            </div>



        </div>
    );
};

const Menu = () => {
    return (
        <div className='pizza'>
            <div className='menu-container'>
                <div className='menu'>
                    {pizzaData.map((pizza, index) => (
                        <Pizza key={index} pizza={pizza} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
