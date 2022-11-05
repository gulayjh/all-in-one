import React from "react";
import { withTranslation, i18n } from "../../i18n";
import style from './products.module.css'
import Link from "next/link";

const Products = () => {
    return (
        <div className={style.Main}>
            <h1 className={style.Title}>{i18n.t('Products')}</h1>
            <div className={style.MainContainer}>
                <div className={style.Content}>
                    <Link href="https://www.snec.az/">
                        <div>
                            <div className={style.LeftContent}>
                                <img src="/images/product1.png" />
                            </div>
                            <div className={style.RightContent}>
                                <h3>{i18n.t('snec-title')}</h3>
                                <p>{i18n.t('snec-text')}</p>
                            </div>
                        </div>
                    </Link>

                    <img src="/images/vector2.png" className={style.leftImage} />
                    <img src="/images/vector1.png" className={style.rightImage} />
                </div>
                <div className={style.Content}>
                    <div>

                        <div className={style.LeftContent}>
                            <img src="/images/product2.png" />
                        </div>
                        <div className={style.RightContent}>
                            <h3>{i18n.t('analytics-title')}</h3>
                            <p>{i18n.t('analytics-text')}</p>
                        </div>
                    </div>

                    <img src="/images/vector3.png" className={style.leftImage} />
                </div>
                <div className={style.Content}>
                    <div>
                        <div className={style.LeftContent}>
                            <img src="/images/product3.png" />
                        </div>
                        <div className={style.RightContent}>
                            <h3>{i18n.t('bd-title')}</h3>
                            <p>{i18n.t('bd-text')}</p>
                        </div>
                    </div>

                    <img src="/images/vector4.png" className={style.leftImage} />
                    <img src="/images/vector5.png" className={style.rightImage} />
                </div>

            </div>
        </div>
    );
}

export default withTranslation('common')(Products);