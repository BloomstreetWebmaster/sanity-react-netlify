import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
     title,
     slug,
     mainImage{
       asset->{
         _id,
         url
       },
       alt
     }
   }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <div className="post">
      <h2>Blog</h2>
      <div className="content">
        {postData &&
          postData.map((post, index) => (
            <div className="contents" key={index}>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                {post.mainImage && (
                  <img
                    width="60%"
                    height="60%"
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  />
                )}
                <h3>{post.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Post;
