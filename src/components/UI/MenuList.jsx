import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./menuList.module.css";

const MenuList = (props) => {
    const { category, hasImg } = props;
    const bgCategory = {
        travel: "#ff7857",
        culture: "#ffb14f",
        fashion: "#ff7887",
        food: "#7fb881",
        coding: "#775aec",
        style: "#78fcff",
    };

    return (
        <Link href="/" className="flex items-center gap-5">
            {hasImg && (
                <figure className="flex-1 relative aspect-square rounded-full overflow-hidden border border-[#d3d3d3]">
                    <Image
                        src="/images/p1.jpeg"
                        alt="p1"
                        className="object-cover"
                        fill
                    />
                </figure>
            )}

            <div className={`${classes.menu_text} flex flex-col gap-[5px]`}>
                <span
                    className="py-[3px] px-2 rounded-[10px] text-xs text-white capitalize font-semibold w-max"
                    style={{ backgroundColor: bgCategory[category] }}
                >
                    {category}
                </span>
                <h4 className=" text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <div className="text-xs">
                    <span>John Doe</span>
                    <span className="text-[#808080]"> - 10.03.2023</span>
                </div>
            </div>
        </Link>
    );
};

export default MenuList;
