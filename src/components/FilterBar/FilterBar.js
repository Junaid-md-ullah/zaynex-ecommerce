import React from 'react';
import './FilterBar.css';
import searchIcon from '../../assets/loupe.png';

const FilterBar = () => {
    return (
        <div className="col-md-3 filter-wrap p-0">
            <div className="pl-3 mt-3">
                <div className="text_color">Filters</div>
                <div className="filter_badges mt-3">
                    <div><span class="badge badge-pill badge-light d-flex justify-content-around align-items-center"><span>Out of Stock</span> <span><i class="fa fa-times-circle"></i></span> </span></div>
                    <div><span class="badge badge_size badge-pill badge-light d-flex justify-content-around align-items-center"><span>Size: XL</span> <span><i class="fa fa-times-circle"></i></span></span></div>
                    <div><span class="badge badge_clear badge-pill badge badge-light d-flex justify-content-around align-items-center"><span>Clear all</span></span></div>
                </div>
            </div>
            <hr className="hr_dashed"></hr>
            {/* category box start*/}
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="men_clothing_text small_text mt-1 text-secondary">Men's Clothing</div>
                <div>
                    <div className="mr-4 w-75 mt-1">
                        <div className="text-center text_color">Casual Wear</div>
                        <div className="text-center small_text text-secondary mt-1">Shirts</div>
                    </div>
                </div>
            </div>
            <hr className="hr_dashed"></hr>
            {/* category box end*/}

            {/* search by brand start */}
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Brand</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="input_icons_brand d-flex pl-2 mt-1">
                    <input type="text" placeholder="Search by Brands" className="search_bar_brand px-1 py-1" />
                    <img src={searchIcon} alt="search icon"/>
                </div>
                <div className="radio brand_radio px-2 mt-1">
                    <input type="radio" id="Aeropostale"/>
                    <label for="Aeropostale">Aeropostale</label><br></br>
                    <input type="radio" id="Antony Morato"/>
                    <label for="Antony Morato" >Antony Morato</label><br></br>
                    <input type="radio" id="Arrow Blue Jeans"/>
                    <label for="Arrow Blue Jeans">Arrow Blue Jeans</label><br></br>
                    <input type="radio" id="Arrow Sport"/>
                    <label for="Arrow Sport">Arrow Sport</label><br></br>
                    <input type="radio" id="Mufti"/>
                    <label for="Mufti">Mufti</label><br></br>
                    <input type="radio" id="Raymond"/>
                    <label for="Raymond">Raymond</label><br></br>
                    <input type="radio" id="United Colors of Benetton"/>
                    <label for="United Colors of Benetton">United Colors of Benetton</label><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>



                </div>
                <div className="see_more mt-2 px-2">
                    236 MORE
                </div>
            </div>
            {/* search by brand end */}
            <hr className="hr_dashed"></hr>

            {/* search by country radio button start */}
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className="radio country_radio px-2 mt-1">
                    <input type="radio" id="USA"/>
                    <label for="USA">USA</label><br></br>
                    <input type="radio" id="Germany"/>
                    <label for="Germany" >Germany</label><br></br>
                    <input type="radio" id="Italy"/>
                    <label for="Italy">Italy</label><br></br>
                    <input type="radio" id="UK"/>
                    <label for="UK">UK</label><br></br>
                    <input type="radio" id="Bangladesh"/>
                    <label for="Bangladesh">Bangladesh</label><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                </div>
                <div className="see_more mt-2 px-2">
                    2 MORE
                </div>
            </div>
            {/* search by country radio button end */}
            <hr className="hr_dashed"></hr>

            {/* search by size start */}

            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Size</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                {/* size choosing */}
                <div className="d-flex justify-content-between px-2 mt-1 sizes">
                    <div>XS</div>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            {/* search by size end */}
            <hr className="hr_dashed"></hr>

            {/* search by color start*/}
            
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Color</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className="d-flex justify-content-between colors px-2 mt-1">
                    <div>
                        <div className="black"></div>
                    </div>
                    <div>
                        <div className="chocolate"></div>
                    </div>
                    <div>
                        <div className="fruit"></div>
                    </div>
                    <div>
                        <div className="ash"></div>
                    </div>
                    <div>
                        <div className="white"></div>
                    </div>
                    <div>
                        <div className="blue"></div>
                    </div>
                </div>
            </div>

             {/* search by color end*/}

             <hr className="hr_dashed"></hr>

             {/* search by discount start */}
            
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Color</option>
                </select>

                <div className="radio discount_radio px-2 mt-1">
                    <input type="radio" id="ten"/>
                    <label for="ten">10% - 30%</label><br></br>
                    <input type="radio" id="thirty"/>
                    <label for="thirty" >30% - 50%</label><br></br>
                    <input type="radio" id="fifty"/>
                    <label for="fifty">50% - 70%</label><br></br>
                </div>

            </div>
            {/* search by discount end */}

            <hr className="hr_dashed"></hr>

            {/* search by price range start */}

            <div>
                <div className="px-2">Price</div>
                <div className="d-flex justify-content-between px-2">
                    <div className="d-flex price_range_wrapper">
                        <input type="text" className="pl-1 py-1 text_color" value="Min" />
                        <hr className="min_max_line"></hr>
                        <input type="text" className="pl-1 py-1 text_color"  value="Max"/>
                    </div>
                    <div className="right_angle">
                        <span>
                            <i class="fa fa-angle-right fa-2x"></i>
                        </span>
                    </div>
                </div>
            </div>

            {/* search by price range end */}

            <hr className="hr_dashed"></hr>

            {/* search by rating start */}

            <div>
                <div className="px-2">Rating</div>

                <div className="radio rating_radio px-2 mt-1">
                    <input type="radio" id="five_star"/>
                    <label for="five_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </label><br></br>

                    <input type="radio" id="four_star"/>
                    <label for="four_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </label><br></br>

                    <input type="radio" id="three_star"/>
                    <label for="three_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </label><br></br>

                    <input type="radio" id="two_star"/>
                    <label for="two_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </label><br></br>

                    <input type="radio" id="one_star"/>
                    <label for="one_star">
                        <span class="fa fa-star checked"></span>
                    </label><br></br>
                </div>
            </div>

            {/* search by rating start */}

            <hr className="hr_dashed"></hr>

            {/* search by fabric start */}
            
            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Fabric</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className="radio fabric_radio px-2 mt-1">
                    <input type="radio" id="Cotton Blend"/>
                    <label for="Cotton Blend">Cotton Blend</label><br></br>
                    <input type="radio" id="Cotton Linen Blend"/>
                    <label for="Cotton Linen Blend" >Cotton Linen Blend</label><br></br>
                    <input type="radio" id="Cotton Silk"/>
                    <label for="Cotton Silk">Cotton Silk</label><br></br>
                    <input type="radio" id="Linen Blend"/>
                    <label for="Linen Blend">Linen Blend</label><br></br>
                    <input type="radio" id="Nylon Blend"/>
                    <label for="Nylon Blend">Nylon Blend</label><br></br>
                    <input type="radio" id="Poly Silk"/>
                    <label for="Poly Silk">Poly Silk</label><br></br>
                    <input type="radio" id="Polycotton"/>
                    <label for="Polycotton">Polycotton</label><br></br>
                    <input type="radio" id="Pure Cotton"/>
                    <label for="Pure Cotton">Pure Cotton</label><br></br>
                    <input type="radio" id="Rayon"/>
                    <label for="Rayon">Rayon</label><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                </div>
                <div className="see_more mt-2 px-2">
                    2 MORE
                </div>
            </div>

            {/* search by fabric end */}

            <hr className="hr_dashed"></hr>

            {/* search by pattern start */}

            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Pattern</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className="radio fabric_radio px-2 mt-1">
                    <input type="radio" id="Checkered"/>
                    <label for="Checkered">Checkered</label><br></br>
                    <input type="radio" id="Cotton Linen Blend"/>
                    <label for="Cotton Linen Blend" >Cotton Linen Blend</label><br></br>
                    <input type="radio" id="Cotton Silk"/>
                    <label for="Cotton Silk">Cotton Silk</label><br></br>
                    <input type="radio" id="Linen Blend"/>
                    <label for="Linen Blend">Linen Blend</label><br></br>
                    <input type="radio" id="Nylon Blend"/>
                    <label for="Nylon Blend">Nylon Blend</label><br></br>
                    <input type="radio" id="Poly Silk"/>
                    <label for="Poly Silk">Poly Silk</label><br></br>
                    <input type="radio" id="Polycotton"/>
                    <label for="Polycotton">Polycotton</label><br></br>
                    <input type="radio" id="Pure Cotton"/>
                    <label for="Pure Cotton">Pure Cotton</label><br></br>
                    <input type="radio" id="Rayon"/>
                    <label for="Rayon">Rayon</label><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                    <input type="radio" id="Arrow"/><br></br>
                </div>
                <div className="see_more mt-2 px-2">
                    2 MORE
                </div>
            </div>

            {/* search by pattern end */}

            <hr className="hr_dashed"></hr>

            {/* search by delivery start */}

            <div>
                <select class="form-select header_select text_color px-2" aria-label="Default select example">
                    <option selected>Service</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div className="radio delivery_radio px-2 mt-1">
                    <input type="radio" id="cod"/>
                    <label for="cod">Cash on Delivery</label><br></br>
                    <input type="radio" id="free"/>
                    <label for="free" >Free Shipping</label><br></br>
                </div>
            </div>            

            {/* search by delivery end */}

            <hr className="hr_dashed"></hr>

            {/* search by clothing style start */}
                <div>
                    <select class="form-select header_select text_color px-2" aria-label="Default select example">
                        <option selected>Clothing Style</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            {/* search by clothing style end */}

            <hr className="hr_dashed"></hr>


            {/* search by clothing Men's Trend start */}
                <div>
                    <select class="form-select header_select text_color px-2" aria-label="Default select example">
                        <option selected>Men's Trend</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            {/* search by clothing Men's Trend end */}

            <hr className="hr_dashed"></hr>

            {/* search by Fit Type start */}
                <div>
                    <select class="form-select header_select text_color px-2" aria-label="Default select example">
                        <option selected>Fit Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <br></br>
                <br></br>
            {/* search by Fit Type end */}

        </div>
    );
};

export default FilterBar;