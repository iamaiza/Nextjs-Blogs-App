import React, { useEffect, useState } from "react";
import { MenuList, Categories } from "./imports";

const getAllCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        method: "GET",
    });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const Menu = (props) => {
    const { menuMt } = props;
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const data = await getAllCategories();
            if (data) {
                setCategories(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div
            className={` ${
                menuMt === true ? "mt-0" : "mt-[60px]"
            } max-lg:hidden`}
            style={{ flex: 2 }}
        >
            <div>
                <h3 className="text-[#808080]">What's hot</h3>
                <h2 className=" text-2xl font-bold">Most Popular</h2>
                <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
                    <MenuList category="travel" />
                    <MenuList category="style" />
                    <MenuList category="coding" />
                    <MenuList category="fashion" />
                </div>
            </div>
            <div>
                <h3 className="text-[#808080]">Discover by topic</h3>
                <h2 className=" text-2xl font-bold">Categories</h2>
                <div className="flex flex-wrap gap-5 mt-[35px] mb-[60px]">
                    <Categories
                        isMenuList={true}
                        fs="text-sm"
                        categories={categories}
                        isLoading={isLoading}
                    />
                </div>
            </div>
            <div>
                <h3 className="text-[#808080]">Choosen by the editor</h3>
                <h2 className=" text-2xl font-bold">Editors Pick</h2>
                <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
                    <MenuList category="travel" hasImg={true} />
                    <MenuList category="culture" hasImg={true} />
                    <MenuList category="food" hasImg={true} />
                    <MenuList category="fashion" hasImg={true} />
                </div>
            </div>
        </div>
    );
};

export default Menu;
