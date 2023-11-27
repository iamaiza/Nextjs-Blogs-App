import React, { useContext } from "react";
import classes from "./theme.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div
            className={`max-[300px]:w-8 max-[300px]:h-4 w-10 h-5 rounded-full cursor-pointer flex justify-between items-center relative ${classes.theme} ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
            onClick={toggleTheme}
        >
            <Image src="/images/moon.png" alt="moon" width={14} height={14} />
            <div
                className={`max-[300px]:w-3 max-[300px]:h-3 w-[15px] h-[15px] rounded-full absolute ${theme === 'dark' ? 'left-[0.1rem]': 'right-[0.1rem]'} ${classes.ball}`}
            ></div>
            <Image src="/images/sun.png" alt="sun" width={14} height={14} />
        </div>
    );
};

export default Theme;
