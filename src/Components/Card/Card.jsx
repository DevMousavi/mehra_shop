import React from "react";

import style from "./Card.module.css";

const Card = () => {
    return (
        <>
            <div className={style.containerCard}>
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
                    <button>
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
                </div>
            </div>
        </>
    );
};

export default Card;
