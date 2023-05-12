import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null); // initial state is null
  const { slug } = useParams();

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}" ]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div className="detail__post">
      <div className="content">
        {singlePost.mainImage && (
          <img
            className="main__image"
            width="50%"
            height="50%"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
        )}
        <div>
          <h3>{singlePost.title}</h3>
          <div className="user_image">
            {singlePost.authorImage && (
              <img
                width="10%"
                height="10%"
                src={urlFor(singlePost.authorImage)
                  .width(100)
                  .height(100)
                  .url()}
                alt={singlePost.name}
              />
            )}
            {singlePost.name}
          </div>
          <BlockContent
            blocks={singlePost.body}
            projectId="69c5evgs"
            dataset="production"
            serializers={serializers}
          />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
