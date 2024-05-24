import React, { useState } from "react";

import style from "./FilterBox.module.css";

const FilterBox = () => {
    // Saved active button status
    const [activeButton, setActiveButton] = useState("bestSellers");

    // Function to handle button clicks and update the active button state accordingly
    const handleButtonClick = (status) => {
        setActiveButton(status);
    };

    return (
        <div className={style.container_btn}>
            <button
                className={
                    activeButton === "bestSellers" ? style.btn_active : ""
                }
                onClick={() => handleButtonClick("bestSellers")}
            >
                پرفروش‌ترین‌ها
            </button>
            <button
                className={activeButton === "newest" ? style.btn_active : ""}
                onClick={() => handleButtonClick("newest")}
            >
                جدیدترین‌ها
            </button>
            <button
                className={activeButton === "favorites" ? style.btn_active : ""}
                onClick={() => handleButtonClick("favorites")}
            >
                محبوب‌ترین‌ها
            </button>
        </div>
    );
};

export default FilterBox;
