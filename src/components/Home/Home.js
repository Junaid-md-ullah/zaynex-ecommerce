import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="row">
            <FilterBar />
            <Products />
        </div>
    );
};

export default Home;