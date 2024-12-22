import { useTranslation } from "react-i18next";
import Header from "../../../component/header/header";
import Carousels from "../carousel/carousel";
import Directorys from "../directory/directory";
import Brands from "../brand/brand";
import FooterAccount from "../../../component/footer/footer";
import ProductHome from "../product/productHome";

const Home = () => {
    const { t } = useTranslation();
    const handleSearch = (searchValue) => {
        console.log("Dữ liệu tìm kiếm:", searchValue);
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className="d-flex justify-content-center pt-3 pb-3" style={{ borderBottom: '1px solid #ccc' }}>
                <div style={{ width: '60%' }}>
                    <Carousels />
                </div>
            </div>

            <div className="d-flex justify-content-center pt-3 pb-3" style={{ background: '#f5f5f5' }}>
                <div style={{ width: '60%', background: '#FFFFFF' }}>
                    <div style={{ borderBottom: '1px solid #ccc', fontSize: '20px', color: "red" }} className="p-3">{t("directory")}</div>
                    <div>
                        <Directorys />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center pb-3" style={{ background: '#f5f5f5' }}>
                <div style={{ width: '60%', background: '#FFFFFF' }}>
                    <div style={{ borderBottom: '1px solid #ccc', fontSize: '20px', color: "red" }} className="p-3">{t("top_search")}</div>
                    <div style={{ borderRight: '1px solid #ccc' }}>
                        <Brands />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center pb-3" style={{ background: '#f5f5f5' }}>
                <div style={{
                    width: '60%',
                    background: '#FFFFFF',
                    fontSize: '20px',
                    color: "red",
                    padding: '12px',
                    borderBottom: '3px solid',
                    textTransform: 'uppercase'
                }}
                    className="d-flex justify-content-center">
                    {t("new_product_one")}
                </div>
            </div>

            <div className="d-flex justify-content-center pb-3" style={{ background: '#f5f5f5' }}>
                <div style={{ width: '60%' }}>
                    <ProductHome />
                </div>
            </div>

            <FooterAccount />
        </>
    )
}

export default Home;