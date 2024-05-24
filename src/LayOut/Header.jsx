import React from "react";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

// "React-Router-dom" library is used for "single page app".
const Header = () => {
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
                    <img src="./Icons/hambergermenu_icon.svg" alt="icon.svg" />
                    <img src="./Icons/search.svg" alt="search.svg" />
                </span>
                <img src="./mehrashop-logo.png" alt="logo.png" />
            </header>
        </>
    );
};

export default Header;
