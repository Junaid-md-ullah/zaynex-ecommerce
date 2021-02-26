import React from 'react';
import './CategorySearch.css';
import searchIcon from '../../assets/loupe.png';

const CategorySearch = () => {
    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <div>Showing 1-40 of 80,068 products</div>
            </div>
            <div className="col-md-5 d-flex justify-content-between p-0">
                <div className="d-flex justify-content-around w-50">
                    <div className="refine_sort_text">Refine by</div>
                    <div class="vl"></div>
                    <div>
                        <select className="refine_sort_select">
                            <option>Price</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-around  w-50">
                    <div className="refine_sort_text">Sort by</div>
                    <div class="vl"></div>
                    <div>
                        <select className="refine_sort_select">
                            <option>Best Sellers</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-1">

            </div>
            <div className="col-md-3">
                <div className="input-icons d-flex">
                    <input type="text" placeholder="Search" className="search_bar px-1 py-1" />
                    <img src={searchIcon} alt="search icon"/>
                </div>
            </div>
        </div>
    );
};

export default CategorySearch;