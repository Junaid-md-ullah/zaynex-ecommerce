import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';

const Products = () => {

    return (
        <div className="col-md-9">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <Pagination />
        </div>
    );
};

export default Products;