import React from "react";
import { withTranslation, i18n } from "../../i18n";
import style from './products.module.css'

const Products = () => {
    return (
        <div className={style.MainContainer}>
            <div className={style.Content}>
                <div className={style.LeftContent}>
                    <img src="/images/product1.png" />
                </div>
                <div className={style.RightContent}>
                    <h3>{i18n.t('snec-title')}</h3>
                    <p>{i18n.t('snec-text')}</p>
                </div>

                <img src="/images/vector2.png" className={style.leftImage} />
                <img src="/images/vector1.png" className={style.rightImage} />
            </div>

        </div>
    );
}

export default withTranslation('common')(Products);