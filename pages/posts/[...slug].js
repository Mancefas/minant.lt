import React from "react";
import { useRouter } from "next/router";

const SinglePost = (props) => {
  const { posts } = props;
  const router = useRouter();

  const possibleSlug = posts.map((item) => item.slug);
  console.log(possibleSlug);

  let singlePost;

  if (posts) {
    const thisPost = posts.find((item) => item.slug === router.query.slug[0]);
    singlePost = thisPost;
  }

  return (
    <div>
      {singlePost && (
        <div>
          <h3>{singlePost.title.rendered}</h3>
        </div>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      //need to make it dynamic
      // String variant:
      "/posts/minti-ziema",
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  const res = await fetch("https://minant.lt/wp-json/wp/v2/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default SinglePost;
