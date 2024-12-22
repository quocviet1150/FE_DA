import React, { useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductHome = () => {
    const products = [
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 2", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 3", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 4", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 5", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 6",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
        "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 7", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 8", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 9", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 10", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 11", "Sản phẩm này không phải là thuốc nó chỉ là thực phẩm chức nằng 12",
    ];

    const [limit] = useState(8);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSeeMore = () => {
        navigate("/products");
    };

    const handleProductDetail = () => {
        navigate("/product-detail");
    }

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace('.', ',') + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.', ',') + "k";
        }
        return num;
    };

    return (
        <>
            <div className="product-grid">
                {products.slice(0, limit * 6).map((product, index) => (
                    <div className="product-item" key={index} onClick={handleProductDetail}>
                        <div className="product-image-wrapper">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: "100%", height: "160px" }}
                                alt="ups"
                            />
                            <div className="percentage">
                                80%
                            </div>
                        </div>
                        <div className="product-name">{product}</div>
                        <div style={{ height: '3vh' }}></div>
                        <div className="d-flex w-100" style={{ padding: '5%' }}>
                            <div className="d-flex justify-content-start align-items-center" style={{ color: '#FF5722', width: '40%' }}>
                                <div style={{ fontSize: '10px' }}>₫</div>5.000
                            </div>
                            <div className="d-flex justify-content-end gap-1" style={{ width: '60%' }}>
                                <div>{t("sold")}</div> {formatNumber(5550)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {products.length > limit * 6 && (
                <div className="d-flex justify-content-center">
                    <button className="see-more-btn" onClick={handleSeeMore}>
                        Xem thêm
                    </button>
                </div>
            )}
        </>
    );
};
export default ProductHome;