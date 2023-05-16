import React, { useState, useEffect } from "react";
import axios from "axios";

function Board() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>작성자: {post.author}</p>
          <p>작성일: {post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Board;
