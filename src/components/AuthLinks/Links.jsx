import React, { useState } from "react";
import classes from "./Links.module.css";
import AuthLinks from "./AuthLinks";
import PagesLinks from "./PagesLinks";

const Links = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <AuthLinks className="max-sm:hidden" />

            <div
                className="max-[320px]:w-4 w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
                onClick={() => setShow(!show)}
            >
                <div className={`w-full ${classes.line}`}></div>
                <div className={`w-full ${classes.line}`}></div>
                <div className={`w-full ${classes.line}`}></div>
            </div>

            {show && (
                <div
                    className={`absolute left-0 w-full flex flex-col justify-center items-center gap-12 text-3xl ${classes.responsive_menu}`}
                >
                    <PagesLinks />
                    <AuthLinks />
                </div>
            )}
        </>
    );
};

export default Links;
