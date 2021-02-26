import React from 'react';
import './Blogs.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import calender from '../../assets/calendar-interface-symbol-tool (1).png';
import comment from '../../assets/comment.png';



const Blogs = (props) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                        <h5>LATEST BLOGS</h5>
                        <small className="text-center">This is a place devoted to giving you deeper insight into the news,<br></br>
                                trends, people and technology behind Bing.
                        </small>
                    </div>
        <Slider {...settings}>
          <div className="banner1">
            <div className="pl-2 pt-2 my-auto">
                <span className="badge py-auto">News</span>
            </div>
            <div className="banner_data_text_wrap px-2 d-flex">
                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={calender} />
                    </span>
                    <div><small>Oct 12, 2020</small></div>
                </div>

                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={comment} className="mt-2" />
                    </span>
                    <div className=""><small>26</small></div>
                </div>
            </div>
          </div>

          <div className="banner2">
          <div className="pl-2 pt-2">
                <span className="badge">Health</span>
            </div>
            <div className="banner_data_text_wrap px-2 d-flex">
                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={calender} />
                    </span>
                    <div><small>Oct 12, 2020</small></div>
                </div>

                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={comment} className="mt-2" />
                    </span>
                    <div className=""><small>26</small></div>
                </div>
            </div>
          </div>
          <div className="banner3">
          <div className="pl-2 pt-2">
                <span className="badge">Fashion</span>
            </div>
            <div className="banner_data_text_wrap px-2 d-flex">
                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={calender} />
                    </span>
                    <div><small>Oct 12, 2020</small></div>
                </div>

                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={comment} className="mt-2" />
                    </span>
                    <div className=""><small>26</small></div>
                </div>
            </div>
          </div>
          <div className="banner4">
          <div className="pl-2 pt-2">
                <span className="badge">Health</span>
            </div>
            <div className="banner_data_text_wrap px-2 d-flex">
                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={calender} />
                    </span>
                    <div><small>Oct 12, 2020</small></div>
                </div>

                <div className="d-flex w-75 banner_date">
                    <span className="my-auto">
                        <img src={comment} className="mt-2" />
                    </span>
                    <div className=""><small>26</small></div>
                </div>
            </div>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
                </div>
            </div>
        </div>
    );
};

export default Blogs;