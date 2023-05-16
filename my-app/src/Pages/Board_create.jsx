import React, { useState, useEffect } from "react";
import axios from "axios";

export function Board_create() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    }
    fetchData();
  }, []);
  
  /*게시물 등록*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/posts", { title, content });
    setPosts([...posts, response.data]);
    setTitle("");
    setContent("");
  };
  
  /*게시물 삭제*/
  const handleDelete = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  /*게시물 수정*/
  const handleEdit = async (id, newTitle, newContent) => {
    await axios.put(`/api/posts/${id}`, { title: newTitle, content: newContent });
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, title: newTitle, content: newContent };
      }
      return post;
    });
    setPosts(newPosts);
  };

  return (
    <div>
      <form className="board_create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">등록</button>
      </form>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>작성자: {post.author}</p>
          <p>작성일: {post.date}</p>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
          <button
            onClick={() => {
              const newTitle = prompt("새 제목을 입력하세요", post.title);
              const newContent = prompt("새 내용을 입력하세요", post.content);
              handleEdit(post.id, newTitle, newContent);
            }}
          >
            수정
          </button>
        </div>
      ))}
    </div>
  );
}

export default Board_create;
