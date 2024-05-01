import React from "react";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";

function BlogPost({ post }) {
  const imgSrc = [person1, person2, person3];
  const imgIndex = post.id - 4;

  // BlogPost componenti, Blog ekranı içerisinde kullanılmıştır

  return (
    <article
      className="post type-post status-publish format-standard has-post-thumbnail hentry"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="single-layout-1">
        <header className="entry-header">
          <div className="entry-meta">
            <span className="posted-by author"> {post.authorName} </span>
          </div>
          <img
            src={imgSrc[imgIndex]}
            alt={post.authorName}
            className="img-style"
          />
        </header>
        <div className="entry-content" itemProp="text">
          <p>{post.content}</p>
        </div>
        <footer>
          <div className="author-info">
            Yazar: {post.authorName} ({post.authorRole})
          </div>
        </footer>
      </div>
    </article>
  );
}

export default BlogPost;
