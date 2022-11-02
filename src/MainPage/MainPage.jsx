import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './main.module.css'
import Link from 'next/link';
import MainSlide from './MainSlide/MainPage';
import AboutUs from './AboutUs/AboutUs';

const MainPage = () => {
    return (
        <div className={style.MainContainer} >
            <div>
                <MainSlide />
            </div>
            <div>
                <h1 className={style.Title}>{i18n.t('About')}</h1>
                <AboutUs />
            </div>
        </div>

    );
}

export default withTranslation('common')(MainPage);