import React from "react";
import FooterAccount from "../../../../component/footer/footer";
import Header from "../../../../component/header/header";
import "./directoryDetail.css";

const DirectoryDetails = () => {

    const handleSearch = (searchValue) => {
        console.log("Dữ liệu tìm kiếm:", searchValue);
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className="directory-details-container">
                <div className="directory-details-parners">
                    <div style={{
                        color: 'red',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}>SHOPEE MALL</div>
                    <div className="directory-details-parners-main">
                        tesst
                    </div>
                </div>
            </div>
            <FooterAccount />
        </>
    );
};

export default DirectoryDetails;