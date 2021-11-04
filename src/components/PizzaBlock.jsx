import React from 'react'
import classNames from 'classnames'

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
    const availableTypes = ['тонкое', 'традиционное']
    const availableSizes = [26, 30, 40]
    
    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(sizes[0])


    const onSelectType = (index) => {
        setActiveType(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

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
                    {availableTypes.map((type, index) => (
                        <li
                            key={type}
                            onClick={() => onSelectType(index)} 
                            className={classNames({
                                'active': activeType === index,
                                'disabled': !types.includes(index)
                            })}
                        >
                            {type}
                        </li>)
                    )}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => (
                        <li
                            key={size}
                            onClick={() => onSelectSize(index)} 
                            className={classNames({
                                'active': activeSize === index,
                                'disabled': !sizes.includes(size)
                            })}
                        >
                            {size} см.
                        </li>)
                    )}
                </ul>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от { price } Р</div>
                    <div className="button button--outline button-add">
                     купить
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock
