// BlogPost.js
import React from "react";

function BlogPost({ post }) {
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
            src={post.imageUrl}
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
