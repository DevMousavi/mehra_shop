import React from "react";
import { Link } from "react-router-dom";

import Header from "../../LayOut/Header.jsx";
import FilterBox from "../../Components/FilterBox/FilterBox.jsx";

import data from "./../../DataBase/db.json";

import style from "./Home.module.css";
import Card from "../../Components/Card/Card.jsx";
import Category from "../../Components/Category/Category.jsx";
import Menu from "../../Components/Menu/Menu.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className={style.container_main}>
                <div>
                    <FilterBox />
                    <Link to="/" className={style.container_btn_more}>
                        <p>مشاهده همه</p>
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.0703 18.0701L4.00031 12.0001L10.0703 5.93005"
                                stroke="#80AD01"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.5 12L4.17 12"
                                stroke="#80AD01"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 12L16.47 12"
                                stroke="#80AD01"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>

                <div className={style.container_cards}>
                    {data.products.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            score={item.score}
                            initial_price={item.initial_price}
                            final_price={item.final_price}
                            image={item.image}
                        />
                    ))}
                </div>
            </main>
            <Category />
            <Menu />
        </>
    );
};

export default Home;
