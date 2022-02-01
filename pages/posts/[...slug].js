import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const SinglePost = (props) => {
  const { posts } = props;
  const router = useRouter();

  const possibleSlug = posts.map((item) => item.slug);

  let singlePost;

  if (posts) {
    const thisPost = posts.find((item) => item.slug === router.query.slug[0]);
    singlePost = thisPost;
  }

  function createMarkup() {
    return { __html: singlePost.content.rendered };
  }

  return (
    <Layout>
      <div>
        {singlePost && (
          <div>
            <h3>{singlePost.title.rendered}</h3>
            <h4 dangerouslySetInnerHTML={createMarkup()}></h4>
          </div>
        )}
      </div>
    </Layout>
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
