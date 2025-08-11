import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div style={{ width: '65%' }}>
                <div style={{ display: 'block', width: '100%' }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                style={{ height: '200px', borderRadius: '2px' }}
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3oqte5qveetf8_xxhdpi"
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                style={{ height: '200px', borderRadius: '2px' }}
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3q2lacm0w5150_xxhdpi"
                                alt=""
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img
                                style={{ height: '200px', borderRadius: '2px' }}
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3oqmw3pgnq9f6_xxhdpi"
                                alt=""
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img
                                style={{ height: '200px', borderRadius: '2px' }}
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3ooaxbsun5hd1_xxhdpi"
                                alt=""
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img
                                style={{ height: '200px', borderRadius: '2px' }}
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3q2lacm0w5150_xxhdpi"
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div style={{ width: '35%', padding: '0 5px' }}>
                <div>
                    <img
                        style={{ height: '97.5px', borderRadius: '2px', marginBottom:'5px' }}
                        className="d-block w-100"
                        src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3q2lacm0w5150_xxhdpi"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        style={{ height: '97.5px', borderRadius: '2px' }}
                        className="d-block w-100"
                        src="https://cf.shopee.vn/file/vn-11134258-7ras8-m3q2lacm0w5150_xxhdpi"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
export default Carousels;