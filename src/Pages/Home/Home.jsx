import React from "react";
import { Link } from "react-router-dom";

import Header from "../../LayOut/Header.jsx";
import FilterBox from "../../Components/FilterBox/FilterBox.jsx";

import style from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Header />
            <main className={style.container_main}>
                <div>
                    <FilterBox />
                    <Link to="/" className={style.container_btn_more}>
                        <p>مشاهده همه</p>
                        <img src="./Icons/arrow-down.svg" alt="arrow.svg" />
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Home;
