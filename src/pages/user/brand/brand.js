import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./brand.css";
import { useTranslation } from "react-i18next";

const Brands = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();

    const products = [
        { id: 1, name: "Khăn Choàng Cổ", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "121000" },
        { id: 2, name: "Quần Lót Nam", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "149000" },
        { id: 3, name: "Bút Mực Gel", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "130000" },
        { id: 4, name: "Giấy Vệ Sinh Cuộn", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "104000" },
        { id: 5, name: "Len", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "159000" },
        { id: 6, name: "Quần Ống Rộng Nữ", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "131000" },
        { id: 7, name: "Sản phẩm 7", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "111000" },
        { id: 8, name: "Sản phẩm 8", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "200000" },
        { id: 9, name: "Sản phẩm 9", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "300000" },
        { id: 10, name: "Sản phẩm 10", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "50000" },
        { id: 11, name: "Sản phẩm 11", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "210000" },
        { id: 12, name: "Sản phẩm 12", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "112000" },
    ];

    const itemsPerSlide = 6;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerSlide >= products.length
                ? 0
                : prevIndex + itemsPerSlide
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerSlide < 0
                ? products.length - itemsPerSlide
                : prevIndex - itemsPerSlide
        );
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex + itemsPerSlide >= products.length;

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && !isFirstSlide && (
                <button className="carousel-btn prev-btn" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            <div className="carousel">
                {products
                    .slice(currentIndex, currentIndex + itemsPerSlide)
                    .map((product) => (
                        <div key={product.id} className="carousel-item-product">
                            <div className="top-badge">TOP</div>
                            <img src={product.img} alt={product.name} className="product-img" />
                            <div className="product-info">
                                <span className="product-sold">{t("buy")} {product.sold}/{t("month")}</span>
                                <h3 className="product-name">{product.name}</h3>
                            </div>
                        </div>
                    ))}
            </div>

            {isHovered && !isLastSlide && (
                <button className="carousel-btn next-btn" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
};

export default Brands;
