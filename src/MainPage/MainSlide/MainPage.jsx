import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../../i18n';
import style from './main.module.css'
import Link from 'next/link';


const MainSlide = () => {
    return (
        <div className={style.MainContainer} >
            <div className={style.Content} >
                <h1>{i18n.t('MainPageTitle')}</h1>
                <h6>{i18n.t('MainPageText')}</h6>
                <button>{i18n.t('MainPageButton')}</button>

            </div>
            <div className={style.Content} >
                <img src="/images/mainPage.png" alt="logo" />


            </div>
        </div>

    );
}

export default withTranslation('common')(MainSlide);