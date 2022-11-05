import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './header.module.css'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { ClickAwayListener } from "@material-ui/core";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const Header = () => {

    const [small, setSmall] = useState(false);
    const [width, setWindowWidth] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 200)
            );
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width > 900) {
            setShowMobileMenu(false)
        }
        setWindowWidth(width);
    };

    return (
        <div className={small ? style.MainContainerScroll : style.MainContainer} >
            <div className={style.HeaderContent}>
                <div className={style.LogoContainer}>
                    <Link href='/'>
                        {small ?
                            <img src="/images/logoScroll.png" alt="logo" />
                            :
                            <img src="/images/logo.png" alt="logo" />
                        }
                    </Link>
                </div>
                {width < 940 ?
                    <div className={style.MenuButton} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <AiOutlineMenu />
                    </div>
                    : null
                }

                <div className={showMobileMenu ? style.MenuContainerOpen : style.MenuContainer}>
                    {width < 940 ?
                        <div className={style.CloseButton} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <AiOutlineClose />
                        </div>

                        : null}
                    <div className={style.MenuContent}>
                        <Link href='/'>
                            <a>{i18n.t('About')}</a>
                        </Link>
                        {width > 940 ?

                            <Link href='/'>
                                <a>{i18n.t('Product')}</a>
                            </Link>
                            : null
                        }

                        < Link href='/'>
                            <a>{i18n.t('Portfolio')}</a>
                        </Link>
                        <Link href='/'>
                            <a>{i18n.t('Contact')}</a>
                        </Link>
                        {width > 940 ?
                            <Link href='/'>
                                <a href="tel:+994 77 348 48 43">{i18n.t('+994 77 348 48 43')}</a>
                            </Link>
                            : null
                        }

                    </div>
                    {i18n && i18n.language ?
                        <div className={style.LanguageContainer}>
                            <div className={style.selectedLanguage} onClick={() => setShowDropDown(!showDropDown)}>
                                <span>{i18n.language}</span>
                                <span>{showDropDown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
                            </div>
                            {showDropDown ?
                                <ClickAwayListener onClickAway={() => setShowDropDown(false)}>
                                    <div className={style.DropDownContainer}>
                                        {i18n.language != 'az' ?
                                            <div className={style.flagcontent} onClick={() => { i18n.changeLanguage('az'); setShowDropDown(false) }}>
                                                <span>AZ</span>
                                            </div>
                                            : null
                                        }
                                        {i18n.language != 'en' ?
                                            <div className={style.flagcontent} onClick={() => { i18n.changeLanguage('en'); setShowDropDown(false) }}>
                                                <span>EN</span>
                                            </div>
                                            : null
                                        }
                                        {i18n.language != 'ru' ?
                                            <div className={style.flagcontent} onClick={() => { i18n.changeLanguage('ru'); setShowDropDown(false) }}>
                                                <span>RU</span>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </ClickAwayListener>
                                : null
                            }
                        </div >
                        : null
                    }
                </div>

            </div>
        </div >

    );
}

export default withTranslation('common')(Header);