import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterAccount from '../component/footer/footer'
import Header from '../component/header/header'
import { useLoading } from '../component/loading/LoadingProvider'
import './page404.css'
import { useTranslation } from 'react-i18next'

const Page404 = () => {
    const { showLoading, hideLoading } = useLoading();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleStateHome = () => {
        showLoading();
        setTimeout(() => {
            navigate('/');
            hideLoading();
        }, 300);
    }

    return (
        <div>
            <Header />
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>


                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        {t("look_like_page404")}
                                    </h3>

                                    <p>{t("page_not_found")}</p>

                                    <button onClick={handleStateHome} class="link_404">{t("go_to_home")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAccount />
        </div>
    )
}

export default Page404
