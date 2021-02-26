import React from 'react';
import './ProductCard.css';
import img1 from '../../../assets/asset-8.png';
import img2 from '../../../assets/asset-9.png';
import img3 from '../../../assets/asset-7.png';
import img4 from '../../../assets/asset-6.png';

const ProductCard = () => {

    return (
        <div className="d-flex justify-content-between product_card_wrap">
        <div className="">
            <div className="card d-flex flex-column justify-content-center align-items-center" style={{width: "12rem"}}>
                <img className="card-img-top" src={img1} alt="Card image cap"/>
                <div className="card-body">
                    <small className="card-text">Multicolor Cotton long sleeve shirt for men</small>
                    <div>BDT. 7,850</div>
                    <div className="d-flex justify-content-between mt-2">
                        <small className="text-secondary"><del>BDT. 7,850</del></small>
                        <small className="text-secondary">34% Off</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="card card_size d-flex flex-column justify-content-center align-items-center" style={{width: "12rem"}}>
                <img className="card-img-top" src={img2} alt="Card image cap"/>
                <div className="card-body">
                    <small className="card-text">GAP Stylish long sleeve shirt</small>
                    <div className="mt-1">BDT. 5,555</div>
                    <div className="d-flex justify-content-between mt-2">
                        <small className="text-secondary"><del>BDT. 7,850</del></small>
                        <small className="text-secondary">34% Off</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="card d-flex flex-column justify-content-center align-items-center" style={{width: "12rem"}}>
                <img className="card-img-top" src={img4} alt="Card image cap"/>
                <div className="card-body">
                    <small className="card-text">Firstly Comfortable Shoes for Men</small>
                    <div>BDT. 2,850</div>
                    <div className="d-flex justify-content-between mt-2">
                        <small className="text-secondary"><del>BDT. 7,850</del></small>
                        <small className="text-secondary">34% Off</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="card d-flex flex-column justify-content-center align-items-center" style={{width: "12rem"}}>
                <img className="card-img-top" src={img3} alt="Card image cap"/>
                <div className="card-body">
                    <small className="card-text">Microsoft Game controller for Xbox</small>
                    <div>BDT. 7,850</div>
                    <div className="d-flex justify-content-between mt-2">
                        <small className="text-secondary"><del>BDT. 22,850</del></small>
                        <small className="text-secondary">34% Off</small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;