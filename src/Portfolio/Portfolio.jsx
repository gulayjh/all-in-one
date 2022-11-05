import React from "react";
import { withTranslation, i18n } from "../../i18n";
import style from './products.module.css'
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className={style.Main}>
            <h1 className={style.Title}>{i18n.t('Portfolio')}</h1>
            <div className={style.MainContainer}>
                <div className={style.Content}>
                    <div className={style.ContentText}>
                        <div className={style.Text}>
                            <img src="/images/portfolio-logo1.png" alt="logo" />
                        </div>
                        <div className={style.Text}>
                            <img src="/images/portfolio-icon1.png" alt="logo" />
                        </div>
                        <div className={style.Text}>
                            <span>{i18n.t('web-site-branding')}</span>
                            <Link href="redara.com">
                                <span>redara.com</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={style.Content}>
                    <div className={style.ContentText}>
                        <div className={style.Text}>
                            <img src="/images/portfolio-logo2.png" alt="logo" />
                        </div>
                        <div className={style.Text}>
                            <img src="/images/portfolio-icon2.png" alt="logo" />
                        </div>
                        <div className={style.Text}>
                            <span>{i18n.t('web-site-branding')}</span>
                            <Link href="encode.com">
                                <span>encode.com</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={style.Content}>
                    <div className={style.ContentText}>
                        <div className={style.Text}>
                            {/* <img src="/images/portfolio-logo1.png" alt="logo" /> */}
                        </div>
                        <div className={style.Text}>
                            {/* <img src="/images/portfolio-icon1.png" alt="logo" /> */}
                        </div>
                        <div className={style.Text}>
                            <span>{i18n.t('web-site-branding')}</span>
                            <Link href="redara.com">
                                <span>redara.com</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default withTranslation('common')(Portfolio);