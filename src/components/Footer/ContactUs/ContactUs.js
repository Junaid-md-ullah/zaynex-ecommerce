import React from 'react';
import './ContactUs.scss';
import lady from '../../../assets/undraw_Mention_re_k5xc.png';
import send from '../../../assets/sendpaper.png';
import bkash from '../../../assets/BKash-bKash-Logo.wine.png';
import nagad from '../../../assets/nagad-logo-7A70CCFEE0-seeklogo.com.png';
import visa from '../../../assets/g4158.png';
import amex from '../../../assets/amex-logo-png.png';
import master from '../../../assets/Mastercard-logo.png';
import customer_sp from '../../../assets/customer-service-2-line.png';
import mail from '../../../assets/mail-send-line.png';
import call from '../../../assets/phone-line.png';
const ContactUs = () => {
    return (
        <div className="row mt-5 d-flex justify-content-between mb-5">
            
                <div className="col-md-2 left_img">
                    <img src={lady} alt="lady" width="250" />
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="w-75">
                        <div>
                            <strong>SUBSCRIBE</strong>
                        </div>
                        <div className="text-secondary w-100">
                            Get the latest news from zDrop
                        </div>
                        <div className="subscribe_email">
                            <input className="text-secondary w-100" type="text" value="Email address" />
                            <span><img src={send}  alt="Send" /></span>
                        </div>
                    </div>

                    <div className="about_us_links d-flex justify-content-between mt-5 w-100">
                        <div>About zDrop</div>
                        <div>FAQ & Support</div>
                        <div>Terms & Condition</div>
                        <div>Privacy Policy</div>
                    </div>

                    <div className="bank_wrap d-flex justify-content-around align-items-center w-100 mt-4">
                        <div>
                            <img src={bkash} width="60" height="25" alt="bank"/>
                        </div>
                        <div>
                            <img src={nagad} width="60" height="25" alt="bank"/>
                        </div>
                        <div>
                            <img src={bkash} width="60" height="25" alt="bank"/>
                        </div>
                        <div>
                            <img src={visa} width="60" height="25" alt="bank"/>
                        </div>
                        <div>
                            <img src={master} width="60" height="25" alt="bank"/>
                        </div>
                        <div>
                            <img src={amex} width="60" height="25" alt="bank"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 d-flex flex-column">
                    <div>
                        CONTACT US
                    </div>
                    <div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <img src={customer_sp} alt="customer support" />
                            </div>
                            <div>
                                <div>
                                    <strong>Hotline:</strong>
                                </div>
                                <div className="font_light">
                                    +8801929459195 (10am-10pm/Sat-Thur)
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <img src={call} alt="customer support" />
                            </div>
                            <div>
                                <div>
                                    <strong>Whole Sales:</strong>
                                </div>
                                <div className="font_light">
                                    01929459195 (10am-12pm)
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <img src={mail} alt="customer support" />
                            </div>
                            <div>
                                <div>
                                    <strong>Email :</strong>
                                </div>
                                <div className="font_light">
                                    support.example@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
    );
};

export default ContactUs;