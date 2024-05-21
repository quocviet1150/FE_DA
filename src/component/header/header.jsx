import React, { useState } from 'react';
import './header.css'; // Import CSS file if you have one

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <div>
            <div className="header_free_details">
                <marquee behavior="" direction="">
                    Free Shipping Sitewide on Every Order, Don’t Miss Out!!
                </marquee>
            </div>
            <div className="d-flex bg-dark align-items-center px-3 justify-content-between">
                <div className=" text-white">
                    <p className="text-uppercase m-0 p-1 fw-semibold fs-5">
                        <span className="" style={{ marginRight: '10px' }}>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        Track Your Order
                    </p>
                </div>
                <div className="text-white">
                    <div>
                        <p className="m-0 p-1" style={{ fontSize: '12px' }}>
                            <span>lOG IN</span> | <span>SIGN UP</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center px-3 py-2" style={{ backgroundColor: 'bisque' }}>
                <div className="d-flex align-items-center" style={{ width: '30%' }}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="" style={{ width: '70px' }} />
                    <span className="fw-bold fs-5 ">seerare</span>
                </div>
                <div className='d-flex justify-content-between' style={{ width: '40%' }}>
                    <div className="All-Category">
                        Trang chủ
                    </div>
                    <div className="All-Category">
                        Sản phẩm
                    </div>
                    <div className="All-Category">
                        Blog
                    </div>
                    <div className="All-Category">
                        Giới thiệu
                    </div>
                    <div className="All-Category">
                        Liên hệ
                    </div>
                </div>
                <div className="d-flex gap-2" style={{ width: '30%' }}>
                    <button className="search_glass border-0  bg-transparent fs-5" onClick={toggleSearch}>
                        <i className="fa-search"></i>
                    </button>
                    {/* Other buttons */}
                </div>
            </div>

            {/* Search bar */}
            {showSearch && (
                <div id="myDIV">
                    <div className="Input-Search">
                        <input type="text" name="" id="" placeholder="Search entire store here..." />
                        <button className="search-btn">Search</button>
                    </div>
                    {/* Trending searches */}
                </div>
            )}

            {/* Modal */}
            {/* Your modal code here */}
        </div>
    );
};

export default Header;
