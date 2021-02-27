import React from 'react';
import facebook from '../../assets/002-facebook-logo.png';
import twitter from '../../assets/001-twitter-logo-silhouette.png';
import linkedin from '../../assets/004-linkedin-logo.png';
import insta from '../../assets/instagram (1).png';
import youtube from '../../assets/005-youtube.png';
import ContactUs from './ContactUs/ContactUs';


const Footer = () => {
    return (
        <>
        <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <div className="social_media_link d-flex justify-content-around align-items-center w-50 mt-3"> 
                    <div>
                        <img src={facebook} alt="social media" />
                    </div>
                    <div>
                        <img src={twitter} alt="social media"/>
                    </div>
                    <div>
                        <img src={linkedin} alt="social media"/>
                    </div>
                    <div>
                        <img src={insta} alt="social media"/>
                    </div>
                    <div>
                        <img src={youtube} alt="social media"/>
                    </div>
                </div>
            </div>
        </div>
            <ContactUs />
        </>
    );
};

export default Footer;