import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, setCategory } from '../redux/actions/pizzas';

function Home() {

    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items)
    
    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [])
  
    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    }, []);
    
    return ( 
        <div className="container">
            <div className="content__top">
                <Categories 
                    items={[
                        "Мясные",
                        "Вегетарианские",
                        "Гриль",
                        "Острые",
                        "Закрытые",
                    ]}
                    onClickItem={onSelectCategory}
                />
                <SortPopup 
                    items={[
                        { name: "популярности", type: 'popular' },
                        { name: "цене", type: 'price' },
                        { name: "алфавиту", type: 'alphabet' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((obj) => (
                        <PizzaBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    )
}

export default Home
