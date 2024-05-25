import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

// "React-Router-dom" library is used for "single page app".
const Header = () => {
    const [isDone, setIsDone] = useState(false);

    const barHandler = () => {
        if (!isDone) {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
    };

    return (
        <>
            <header className={style.headerPC}>
                <div className={style.icons}>
                    <Link to="/cart" className={style.image_icon}>
                        <img
                            src="./public/Icons/Cart_icon_2.svg"
                            alt="Cart_icon_2.svg"
                        />
                    </Link>
                    <Link to="/favorites" className={style.image_icon}>
                        <img
                            src="./public/Icons/Heart_icon.svg"
                            alt="Heart_icon.svg"
                        />
                    </Link>
                    <Link to="/account" className={style.image_icon}>
                        <img
                            src="./public/Icons/Account_icon.svg"
                            alt="Vector.svg"
                        />
                    </Link>
                </div>
                <ul className={style.container_li}>
                    <li>
                        <NavLink to="/">خانه</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">بلاگ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about_us">داستان ما</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact_us">تماس با ما</NavLink>
                    </li>
                </ul>
                <Link to="/">
                    <img
                        src="./mehrashop-logo.png"
                        alt="mehrashop-logo.png"
                        className={style.logo}
                    />
                </Link>
            </header>
            <header className={style.headerMobile}>
                <span>
                    <img
                        src="./Icons/hambergermenu_icon.svg"
                        alt="icon.svg"
                        onClick={barHandler}
                    />
                    <img src="./Icons/search.svg" alt="search.svg" />
                </span>
                <Link to="/">
                    <img src="./mehrashop-logo.png" alt="logo.png" />
                </Link>
            </header>

            <div
                className={style.menuBar}
                style={{ display: isDone ? "flex" : "none" }}
            >
                <ul>
                    <li>
                        <NavLink to="/">
                            <p>بلاگ</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <p>داستان ما</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <p>تماس با ما</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <p>فروشنده شوید!</p>
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.00879 9.34998V13.0916C3.00879 16.8333 4.50879 18.3333 8.25046 18.3333H12.7421C16.4838 18.3333 17.9838 16.8333 17.9838 13.0916V9.34998"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.4997 9.99996C12.0247 9.99996 13.1497 8.75829 12.9997 7.23329L12.4497 1.66663H8.55808L7.99975 7.23329C7.84975 8.75829 8.97475 9.99996 10.4997 9.99996Z"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.7587 9.99996C17.442 9.99996 18.6753 8.63329 18.5087 6.95829L18.2753 4.66663C17.9753 2.49996 17.142 1.66663 14.9587 1.66663H12.417L13.0003 7.50829C13.142 8.88329 14.3837 9.99996 15.7587 9.99996Z"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.19966 9.99996C6.57466 9.99996 7.81632 8.88329 7.94966 7.50829L8.13299 5.66663L8.53299 1.66663H5.99133C3.80799 1.66663 2.97466 2.49996 2.67466 4.66663L2.44966 6.95829C2.28299 8.63329 3.51632 9.99996 5.19966 9.99996Z"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5003 14.1666C9.10866 14.1666 8.41699 14.8583 8.41699 16.25V18.3333H12.5837V16.25C12.5837 14.8583 11.892 14.1666 10.5003 14.1666Z"
                                    stroke="#6B6B6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
