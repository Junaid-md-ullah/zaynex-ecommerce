import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="row mt-2">
            <div className="col-md-12">
                <div className="d-flex nav_links justify-content-between">
                    <a href="#">Homepage</a>
                    <a href="#">All Products</a>
                </div>
                <hr></hr>
            </div>
        </div>
    );
};

export default Navbar;