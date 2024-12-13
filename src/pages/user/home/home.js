import { useTranslation } from "react-i18next";
import Header from "../../../component/header/header";

const Home = () => {
    const { t } = useTranslation();
    console.log(t('connect_us'));
    
    return (
        <>
            <Header />
        </>
    )
}

export default Home;