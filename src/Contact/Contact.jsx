import React, { useState } from "react";
import { withTranslation, i18n } from "../../i18n";
import style from './products.module.css'
import Link from "next/link";

const Contact = () => {

    const [data, setData] = useState([{ name: "", email: "" }])


    const handleChange = (value, type) => {
        console.log(value, type);
        let updated = [...data]
        data[0][type] = value
        setData(updated)
    }

    return (
        <div className={style.Main} id="Contact">
            <h1 className={style.Title}>{i18n.t('Contact')}</h1>
            <div className={style.MainContainer}>
                <div className={style.Content}>
                    <div>
                        <div className={style.row}>
                            <span>
                                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.35063V1.66667C0 1.22464 0.171205 0.800716 0.475951 0.488155C0.780698 0.175595 1.19402 0 1.625 0L24.375 0C24.806 0 25.2193 0.175595 25.524 0.488155C25.8288 0.800716 26 1.22464 26 1.66667V2.35063L13 10.684L0 2.35063ZM13.4306 12.3735C13.3015 12.4562 13.1523 12.5001 13 12.5001C12.8477 12.5001 12.6985 12.4562 12.5694 12.3735L0 4.31604V18.3333C0 18.7754 0.171205 19.1993 0.475951 19.5118C0.780698 19.8244 1.19402 20 1.625 20H24.375C24.806 20 25.2193 19.8244 25.524 19.5118C25.8288 19.1993 26 18.7754 26 18.3333V4.31604L13.4306 12.3735Z" fill="#4E6262" />
                                </svg>
                            </span>
                            <Link href="">
                                <a href="mailto:info@aio.az">info@aio.az</a>
                            </Link>

                        </div>
                        <div className={style.row}>
                            <span>
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.651 5.80389C10.3287 2.09645 6.46094 0.277327 6.29726 0.203077C6.14424 0.131145 5.97275 0.108163 5.80619 0.137264C1.34107 0.878077 0.669445 3.47683 0.642445 3.58483C0.60571 3.73533 0.611553 3.89308 0.65932 4.04045C5.98507 20.5645 17.0534 23.6273 20.6916 24.6347C20.9718 24.7123 21.2029 24.7748 21.3784 24.8321C21.5787 24.8976 21.7963 24.8849 21.9876 24.7967C22.099 24.7461 24.7281 23.5075 25.3711 19.4676C25.3996 19.2912 25.3712 19.1104 25.2901 18.9512C25.2327 18.8398 23.8574 16.2225 20.0436 15.2978C19.9143 15.2647 19.7788 15.2635 19.6488 15.2944C19.5189 15.3252 19.3984 15.3872 19.2978 15.475C18.0946 16.5026 16.4324 17.5978 15.7152 17.7109C10.9075 15.3602 8.22269 10.8495 8.12144 9.99395C8.06238 9.51301 9.16432 7.82383 10.4316 6.4502C10.5113 6.36375 10.572 6.26158 10.6097 6.15027C10.6475 6.03896 10.6616 5.92096 10.651 5.80389Z" fill="#4E6262" />
                                </svg>

                            </span>
                            <Link href="">
                                <a href="tel:+ +994 77 348 48 43">+994 77 348 48 43</a>
                            </Link>
                        </div>
                        <div className={style.row}>
                            <span>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4688 0H7.53125C3.65398 0 0.5 3.28014 0.5 7.3125V18.6875C0.5 22.7199 3.65398 26 7.53125 26H18.4688C22.346 26 25.5 22.7199 25.5 18.6875V7.3125C25.5 3.28014 22.346 0 18.4688 0ZM13 19.5C9.5538 19.5 6.75 16.5848 6.75 13C6.75 9.41517 9.5538 6.5 13 6.5C16.4462 6.5 19.25 9.41517 19.25 13C19.25 16.5848 16.4462 19.5 13 19.5ZM20.0312 6.5C19.5998 6.5 19.25 6.1362 19.25 5.6875C19.25 5.2387 19.5998 4.875 20.0312 4.875C20.4627 4.875 20.8125 5.2387 20.8125 5.6875C20.8125 6.1362 20.4627 6.5 20.0312 6.5Z" fill="#4E6262" />
                                </svg>
                            </span>
                            <Link href="https://www.instagram.com/aio.solutions">
                                <a>aio.solutions</a>
                            </Link>
                        </div>
                        <div className={style.row}>
                            <span>
                                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.35063V1.66667C0 1.22464 0.171205 0.800716 0.475951 0.488155C0.780698 0.175595 1.19402 0 1.625 0L24.375 0C24.806 0 25.2193 0.175595 25.524 0.488155C25.8288 0.800716 26 1.22464 26 1.66667V2.35063L13 10.684L0 2.35063ZM13.4306 12.3735C13.3015 12.4562 13.1523 12.5001 13 12.5001C12.8477 12.5001 12.6985 12.4562 12.5694 12.3735L0 4.31604V18.3333C0 18.7754 0.171205 19.1993 0.475951 19.5118C0.780698 19.8244 1.19402 20 1.625 20H24.375C24.806 20 25.2193 19.8244 25.524 19.5118C25.8288 19.1993 26 18.7754 26 18.3333V4.31604L13.4306 12.3735Z" fill="#4E6262" />
                                </svg>
                            </span>
                            <Link href="">
                                <a>@AIOsolutions</a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className={style.Content}>
                    <div></div>
                </div>

                <div className={style.Content}>
                    {data && data.map((item) => {
                        return (
                            <div className={style.InputContent}>
                                <div>
                                    <label>{i18n.t('name')}</label>
                                    <input type="text" value={item.name} onChange={(event) => { handleChange(event.target.value, "name") }} />
                                </div>

                                <div>
                                    <label>{i18n.t('email')}</label>
                                    <input type="email" value={item.email} onChange={(event) => { handleChange(event.target.value, "email") }} />
                                </div>

                                <div>
                                    <button>{i18n.t('submit')}</button>
                                </div>
                            </div>

                        )
                    })}

                </div>


            </div>
        </div>
    );
}

export default withTranslation('common')(Contact);