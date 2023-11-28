import Image from "next/image";
import { Comments, Menu } from "@/imports";
import classes from "./slug.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    if(slug) getSinglePostHandler();
  }, [slug]);
  const getSinglePostHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
    const data = await res.json();
    setPost(data);
  };

  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1
            className={`mb-[50px] text-3xl sm:text-5xl 2xl:text-[55px] font-bold ${classes.title}`}
          >
            {post?.title}
          </h1>
          <div className="flex items-center gap-5">
            {post?.user.image && (
              <figure className="relative w-[50px] h-[50px]">
                <Image
                  className="object-cover rounded-full"
                  src={post?.user.image}
                  alt="user"
                  fill
                />
              </figure>
            )}

            <div className="flex flex-col">
              <span
                className={`${classes.text} font-semibold capitalize text-lg 2xl:text-xl`}
              >
                {post?.user.name}
              </span>
              <span className={classes.text}>{post?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {post?.img && (
          <figure className="flex-1 h-[350px] relative max-lg:hidden">
            <Image
              className="object-cover"
              src={"/images" + post?.img || post?.img}
              alt="p1"
              fill
            />
          </figure>
        )}
      </div>
      <div className="flex gap-[50px] mt-[60px]">
        <div className={classes.content}>
          <div
            className="font-light text-base sm:text-lg 2xl:text-xl mb-5"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />

          <div>
            <Comments slug={slug} />
          </div>
        </div>
        <Menu menuMt={true} />
      </div>
    </div>
  );
};

export default SingleBlogPage;
