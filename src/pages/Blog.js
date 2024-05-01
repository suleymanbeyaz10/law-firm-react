import React, { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost";
// import person1 from "../assets/images/person_1.jpg";
// import person2 from "../assets/images/person_2.jpg";
// import person3 from "../assets/images/person_3.jpg";

function Blog() {
  const [posts, setPosts] = useState([]);

  // API'ye istek atma
  useEffect(() => {
    fetch("https://localhost:44383/api/Blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
