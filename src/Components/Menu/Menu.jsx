import React from "react";

import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className={style.container}>
            <ul>
                <li>
                    <NavLink to="/">
                        <p style={{ color: "#80ad01", fontWeight: "700" }}>
                            خانه
                        </p>
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.0402 5.32006L12.2802 1.29006C10.7102 0.19006 8.30023 0.25006 6.79023 1.42006L1.78023 5.33006C0.780234 6.11006 -0.00976562 7.71006 -0.00976562 8.97006V15.8701C-0.00976562 18.4201 2.06023 20.5001 4.61023 20.5001H15.3902C17.9402 20.5001 20.0102 18.4301 20.0102 15.8801V9.10006C20.0102 7.75006 19.1402 6.09006 18.0402 5.32006Z"
                                fill="#80AD01"
                            />
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <p>دسته‌بندی‌ها</p>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.33301 10.5H7.33301C9.33301 10.5 10.333 9.5 10.333 7.5V5.5C10.333 3.5 9.33301 2.5 7.33301 2.5H5.33301C3.33301 2.5 2.33301 3.5 2.33301 5.5V7.5C2.33301 9.5 3.33301 10.5 5.33301 10.5Z"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.333 2.5H17.333C15.333 2.5 14.333 3.5 14.333 5.5V7.5C14.333 9.5 15.333 10.5 17.333 10.5H19.333C21.333 10.5 22.333 9.5 22.333 7.5V5.5"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.333 22.5H19.333C21.333 22.5 22.333 21.5 22.333 19.5V17.5C22.333 15.5 21.333 14.5 19.333 14.5H17.333C15.333 14.5 14.333 15.5 14.333 17.5V19.5C14.333 21.5 15.333 22.5 17.333 22.5Z"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.33301 22.5H7.33301C9.33301 22.5 10.333 21.5 10.333 19.5V17.5C10.333 15.5 9.33301 14.5 7.33301 14.5H5.33301C3.33301 14.5 2.33301 15.5 2.33301 17.5V19.5"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <p>سبد خرید</p>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.9173 14.47C20.0573 16.1 18.7673 17.5 17.1273 17.5H6.47732C5.03732 17.5 3.77732 16.32 3.66732 14.89L3.12733 7.39001C3.00733 5.73001 4.26733 4.38 5.93733 4.38H18.8473"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22.667 2.5H20.927C19.847 2.5 18.997 3.43 19.087 4.5L19.587 10.55"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.41699 22.5C7.72664 22.5 7.16699 21.9404 7.16699 21.25C7.16699 20.5596 7.72664 20 8.41699 20C9.10735 20 9.66699 20.5596 9.66699 21.25C9.66699 21.9404 9.10735 22.5 8.41699 22.5Z"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.417 22.5C15.7266 22.5 15.167 21.9404 15.167 21.25C15.167 20.5596 15.7266 20 16.417 20C17.1073 20 17.667 20.5596 17.667 21.25C17.667 21.9404 17.1073 22.5 16.417 22.5Z"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.667 8.5H3.66699"
                                stroke="#6B6B6B"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <p>پروفایل</p>
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.6802 4.46C16.1602 5.17 16.4402 6.02 16.4402 6.94C16.4302 9.34 14.5402 11.29 12.1602 11.37C12.0602 11.36 11.9402 11.36 11.8302 11.37C9.6202 11.3 7.8302 9.61 7.5902 7.45C7.3002 4.88 9.4102 2.5 11.9902 2.5"
                                stroke="#6B6B6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.9898 15.06C4.5698 16.68 4.5698 19.32 6.9898 20.93C9.7398 22.77 14.2498 22.77 16.9998 20.93C19.4198 19.31 19.4198 16.67 16.9998 15.06C14.2698 13.23 9.7598 13.23 6.9898 15.06Z"
                                stroke="#6B6B6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
