import React from 'react'
import { Categories, SortPopup } from '../components';

function Home() {
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
                    onClick={(name)=> console.log(name)}
                />
                <SortPopup 
                    items={[
                        "популярности",
                        "цене",
                        "алфавиту",
                    ]}
                />
            </div>
        </div>
    )
}

export default Home
