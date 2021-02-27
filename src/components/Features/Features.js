import React from 'react';
import './Features.scss';
import img1 from '../../assets/like.png';
import img2 from '../../assets/medal.png';
import img3 from '../../assets/paper-plane.png';
import img4 from '../../assets/locker.png';
import img5 from '../../assets/commentFeature.png';

const Features = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={img1} width="40" alt="like" />
                    </div>
                    <div className="mt-2">
                        Quality and Saving
                    </div>
                    <div className="feature_desc text-secondary text-center mt-1">
                        <small className="">Comprehensive quality <br></br> control and affordable prices</small>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={img2} width="40" alt="like" />
                    </div>
                    <div className="mt-2">
                        Global Brands
                    </div>
                    <div className="feature_desc text-secondary text-center mt-1">
                        <small>Buy you favorite items from <br></br>your favorite global brands</small>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={img3} width="40" alt="like" />
                    </div>
                    <div className="mt-2">
                        Fast Delivery
                    </div>
                    <div className="feature_desc text-secondary text-center mt-1">
                        <small>Fast and convenient<br></br>door to door delivery</small>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={img4} width="40" alt="like" />
                    </div>
                    <div className="mt-2">
                        Secure Payment
                    </div>
                    <div className="feature_desc text-secondary text-center mt-1">
                        <small>Different secure<br></br>payment methods</small>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src={img5} width="40" alt="like" />
                    </div>
                    <div className="mt-2">
                        Professional Service
                    </div>
                    <div className="feature_desc text-secondary text-center mt-1">
                        <small>Efficient customer support<br></br>from passionate team</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;