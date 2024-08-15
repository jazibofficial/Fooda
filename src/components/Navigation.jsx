import React, { useState } from 'react';
import { foodData } from '../Data/Data';

function Navigation({ setFilteredData, selectType }) {
    const [isSearch, setIsSearch] = useState(false);

    const searchHandler = () => {
        setIsSearch(!isSearch);
    };

    const searchfood = (e) => {
        const searchFood = e.target.value;
        const filtered = foodData?.filter((item) =>
            item.name.toLowerCase().includes(searchFood.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <header className='container'>
            <a href="#" className='img'>
                <img src="./img/Foody Zone@2x.png" alt="Foody Zone" />
            </a>

            <nav className='navbar'>
                <button onClick={() => selectType("all")}>All</button>
                <button onClick={() => selectType("breakfast")}>Breakfast</button>
                <button onClick={() => selectType("lunch")}>Lunch</button>
                <button onClick={() => selectType("dinner")}>Dinner</button>
            </nav>

            <div className='icons'>
                <div className="fa fa-search" style={{ padding: '10px' }} onClick={searchHandler}></div>
                <div className="fa fa-shopping-cart" style={{ padding: '10px' }}></div>
                <div className="fa fa-bars" style={{ padding: '10px' }} id='menu'></div>
            </div>

            <div className={`search-form ${isSearch ? "active" : ""}`}>
                <label htmlFor="search-box" className='fa fa-search'></label>
                <input type="text" placeholder='search here...' id='search-box' onChange={searchfood} />
            </div>
        </header>
    );
}

export default Navigation;
