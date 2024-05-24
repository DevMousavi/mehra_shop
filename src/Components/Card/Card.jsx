import React, { useState } from "react";

import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = () => {
    const [isDone, setIsDone] = useState(false);
    const [number, setNumber] = useState(0);

    // Condition for displaying increasing and decreasing signs after increasing the number 1
    // The function that increases the number of products
    const increaseHandler = () => {
        if (!isDone) {
            setIsDone(true);
        }
        setNumber((number) => number + 1);
    };

    // The function that reduces the number of products with the logic that the function is executed until the number of products is greater than 0
    // The condition for the number of products to be non-negative is set
    const reducerHandler = () => {
        if (number > 1) {
            setNumber((number) => number - 1);
        } else {
            setNumber(0);
            setIsDone(false);
        }
    };

    // Use the "Link" tag to redirect to the "About Product" page.
    return (
        <>
            <Link className={style.containerCard}>
                <div>
                    <img
                        src="./public/image_product.png"
                        alt="image_product.png"
                    />

                    <span>
                        <img src="./Icons/Frame.svg" alt="Frame.svg" />
                        <img src="./Icons/Frame.svg" alt="Frame.svg" />
                        <img src="./Icons/Frame.svg" alt="Frame.svg" />
                    </span>
                </div>
                <h2 className={style.titleProducts}>
                    عنوان محصول عنوان محصول عنوان محصول عنوان محصول
                </h2>
                <div className={style.rating_and_seller_container}>
                    <span>
                        <p>4.6</p>
                        <img src="./public/Icons/Star.svg" alt="Star.svg" />
                    </span>
                    <span>
                        <p>مهراشاپ</p>
                        <img src="./public/Icons/shop.svg" alt="shop.svg" />
                    </span>
                </div>
                <div className={style.container_price_increase}>
                    <span>
                        <p>
                            <del>460,000</del>
                        </p>
                        <span className={style.final_price}>
                            <p>تومان</p>
                            <p>460.000</p>
                        </span>
                    </span>
                    <button
                        onClick={increaseHandler}
                        style={{ display: isDone ? "none" : "flex" }}
                        className={style.btn_plus}
                    >
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.5 8.5H8.5M15.5 8.5H8.5M8.5 15.5V8.5M8.5 1.5V8.5"
                                stroke="#80AD01"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        style={{ display: isDone ? "flex" : "none" }}
                        className={style.numberHandler}
                    >
                        <svg
                            width="17px"
                            height="17px"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ cursor: "pointer" }}
                            onClick={increaseHandler}
                        >
                            <path
                                d="M1.5 8.5H8.5M15.5 8.5H8.5M8.5 15.5V8.5M8.5 1.5V8.5"
                                stroke="#80AD01"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p>{number}</p>
                        <svg
                            height="17px"
                            width="17px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 49.859 49.859"
                            xmlSpace="preserve"
                            style={{ cursor: "pointer" }}
                            onClick={reducerHandler}
                        >
                            <g>
                                <path
                                    style={{ fill: "#80AD01" }}
                                    d="M45.964,21.034H3.896C1.744,21.034,0,22.778,0,24.93s1.743,3.895,3.896,3.895h42.068
	            c2.151,0,3.895-1.744,3.895-3.895S48.116,21.034,45.964,21.034z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            </Link>
        </>
    );
};

export default Card;
