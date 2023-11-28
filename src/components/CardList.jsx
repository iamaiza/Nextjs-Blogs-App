import React, { useEffect, useState } from "react";
import { Card, Pagination } from "./imports";


const getAllPosts = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&category=${cat || ""}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
};

const CardList = ({ page, cat, showFullText }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const POST_PER_PAGE = 2;

  useEffect(() => {
    console.log('getPosts from page ' + page + ' and category ' + cat);
    if(page) getPosts();
  }, [page]);

  const getPosts = async () => {
    const { posts, count } = await getAllPosts(page, cat);

    const newPrev = POST_PER_PAGE * (page - 1) > 0;
    const newNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
      if (posts) {
        setBlogPosts(posts)
      }

    setHasPrev(newPrev);
    setHasNext(newNext);
  };
  return (
    <div style={{ flex: 5 }}>
      <h1 className="text-[1.7rem] font-bold my-[50px]">Recent Posts</h1>
      <div>
        {blogPosts?.map((post) => (
          <Card key={post.id} post={post} showFullText={showFullText} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
