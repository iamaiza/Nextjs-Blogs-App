import React from "react";
import Link from "next/link";

const PagesLinks = ({ className }) => {
    return (
        <>
            <Link className={className} href="/">
                Home
            </Link>
            <Link className={className} href="/contact">
                Contact
            </Link>
            <Link className={className} href="/about">
                About
            </Link>
        </>
    );
};

export default PagesLinks;
