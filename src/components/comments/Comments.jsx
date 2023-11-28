import Image from "next/image";
import Link from "next/link";
import classes from "./comments.module.css";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ slug }) => {
  const { status } = useSession();
  const [desc, setdesc] = useState("");
  const { data, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/comments?slug=${slug}`,
    fetcher
  );

  const createCommentHandler = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, slug }),
    });

    mutate()
  };

  return (
    <div className="mt-[50px]">
      <h2 className={`font-bold text-2xl ${classes.title} mb-[30px]`}>
        Comments
      </h2>
      {status === "authenticated" ? (
        <div
          className="flex items-center justify-between max-sm:flex-col gap-[30px]"
        >
          <textarea
            placeholder="Enter your comment"
            className={`w-full py-3 px-5 sm:py-5 rounded outline-none ${classes.textarea}`}
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
          <button 
            className="rounded-[5px] py-4 px-5 font-bold text-white bg-[#008080]"
            onClick={createCommentHandler}
          >
            Send
          </button>
        </div>
      ) : (
        <div className="my-3">
          You don't have an account yet. To create account{" "}
          <Link className="underline italic text-sky-600" href="/login">
            Click here.
          </Link>
        </div>
      )}

      <div className="mt-[50px]">
        {isLoading
          ? "Loading..."
          : data?.map((comment) => (
              <div className="mb-[50px]" key={comment.id}>
                <div className="flex items-center gap-5 mb-5">
                  {comment.user.image && (
                    <figure className="w-[30px] h-[30px] relative">
                      <Image
                        className="object-cover rounded-full"
                        src={comment.user.image}
                        alt="user image"
                        fill
                      />
                    </figure>
                  )}

                  <div className={`flex flex-col ${classes.user}`}>
                    <span className="font-semibold capitalize">
                      {comment.user.name}
                    </span>
                    <span className="text-sm">
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-light">{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
