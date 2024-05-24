import React from "react";
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
                </div>
            </main>
        </>
    );
};

export default Home;
