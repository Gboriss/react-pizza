import React from 'react'

function PizzaBlock({ name, imageUrl, price }) {
    return (
        <div className="pizza-block">
            <img 
                className="pizza-block__image"
                src={ imageUrl }
                alt="Pizza"
            />
            <h2 className="pizza-block__title">{ name }</h2>
            <div className="pizza-block__selector">
                <ul>
                    <li className="active">Тонкое</li>
                    <li className="disabled">Традиционное</li>
                </ul>
                <ul>
                    <li className="active">24 см</li>
                    <li>30 см</li>
                    <li>40 см</li>
                </ul>
                <div className="pizza-block__bottom">
                
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock
