import React from "react";
import { Link } from "react-router-dom";

import Header from "../../LayOut/Header.jsx";
import FilterBox from "../../Components/FilterBox/FilterBox.jsx";

import data from "./../../DataBase/db.json";

import style from "./Home.module.css";
import Card from "../../Components/Card/Card.jsx";
import Category from "../../Components/Category/Category.jsx";

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
        </>
    );
};

export default Home;
