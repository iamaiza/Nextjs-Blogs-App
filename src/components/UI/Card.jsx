import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./card.module.css";

const Card = (props) => {
  const { post, showFullText } = props;

  return (
    <div
      className={`flex ${
        showFullText === true ? "items-start" : "items-center"
      } gap-[50px] mb-[50px] ${classes.card}`}
    >
      {post.img && (
        <figure className="flex-1 h-[350px] relative max-xl:hidden">
          <Image
            className="object-contain"
            src={"/images" + post.img}
            alt={post.title}
            fill
          />
        </figure>
      )}

      <div className="flex-1 flex flex-col gap-[30px]">
        <div>
          <span className="text-[#808080]">
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="uppercase text-[#dc143c] font-semibold">
            culture
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h3 className="font-bold text-[1.35rem] sm:text-[1.7rem] 2xl:text-[28px]">
            {post.title}
          </h3>
        </Link>
        <p className={`2xl:text-lg ${showFullText === true && "text-[15px]"}`}>
          {showFullText === false ? (
            <span>{post.desc.substr(0, 250)}...</span>
          ) : (
            <span>{post.desc}</span>
          )}
        </p>
        <Link
          href={`/posts/${post.slug}`}
          className="w-max border-b border-[#dc143c]"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
