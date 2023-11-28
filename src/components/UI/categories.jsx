import Link from "next/link";
import Image from "next/image";
import classes from "./categories.module.css";

const Categories = (props) => {
    const { categories, isCateList, isMenuList, hasImg, fs, isLoading } = props
    const bgCategory = {
        style: "#57c4ff31",
        fashion: " #da85c731",
        food: "#7fb88133",
        travel: "#ff795736",
        culture: "#ffb04f45",
        coding: "#5e4fff31",
    };

    const cateList = "w-full sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] h-20";
    const menuList = "py-[10px] px-[25px]";

    if(isLoading) {
        return <div className="mt-5 text-center w-full text-xl italic">Loading.....</div>
    }
    if(!categories || categories.length === 0) {
        return <div className="mt-5 text-center w-full">No categories available.</div>
    }


    return (
        <>
            {categories?.map((category) => (
                <Link
                    key={category.id}
                    className={`flex items-center justify-center gap-2.5 ${
                            isCateList === true
                            ? cateList
                            : isMenuList === true
                            ? menuList
                            : ""
                        } rounded-[10px]`}
                    style={{
                        backgroundColor: bgCategory[category.slug],
                    }}
                    href={`/blog?category=${category.slug}`}
                >
                    {hasImg && (
                        <figure
                            className={`w-8 h-8 rounded-full overflow-hidden ${classes.img}`}
                        >
                            <Image
                                src={'/images' + category.img}
                                alt={category.title}
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </figure>
                    )}
                    <span className={`${fs} capitalize`}>{category.title}</span>
                </Link>
            ))}
        </>
    );
};

export default Categories;
