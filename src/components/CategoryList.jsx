import { useEffect, useState } from "react";
import { Categories } from "./imports";

const getAllCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        method: "GET",
    });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const CategoryList = () => {
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
        <div>
            <h2 className="my-[50px] font-bold text-3xl">Popular Categories</h2>
            <div className="flex justify-center xl:justify-between flex-wrap gap-5">
                <Categories
                    isLoading={isLoading}
                    categories={categories}
                    hasImg={true}
                    isCateList={true}
                />
            </div>
        </div>
    );
};

export default CategoryList;
