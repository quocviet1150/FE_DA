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
        { id: 1, name: "Khăn Choàng Cổ", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "21000" },
        { id: 2, name: "Quần Lót Nam", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "49000" },
        { id: 3, name: "Bút Mực Gel", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "30000" },
        { id: 4, name: "Giấy Vệ Sinh Cuộn", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "04000" },
        { id: 5, name: "Len", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "59000" },
        { id: 6, name: "Quần Ống Rộng Nữ", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "31000" },
        { id: 7, name: "Sản phẩm 7", img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp", sold: "11000" },
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

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace('.', ',') + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.', ',') + "k";
        }
        return num;
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
                            <div className="top-badge">{t("top")}</div>
                            <img src={product.img} alt={product.name} className="product-img" />
                            <div className="product-info">
                                <span className="product-sold">{t("buy")} {formatNumber(product.sold)}/{t("month")}</span>
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
