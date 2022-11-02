import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './main.module.css'
import Link from 'next/link';
import MainSlide from './MainSlide/MainPage';
import AboutUs from './AboutUs/AboutUs';

const MainPage = () => {
    return (
        <div className={style.MainContainer} >
            <MainSlide />
            <AboutUs/>
        </div>

    );
}

export default withTranslation('common')(MainPage);