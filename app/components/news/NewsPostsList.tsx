"use client";

import React, { useEffect, useState } from "react";
import PostItem from "./post/PostItem";

export default function NewsPostsList() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.body.posts)
        console.log(data);
        console.log(posts);
        
      });
  }, []);

  return (
    <div>
      <PostItem />
    </div>
  );
}
