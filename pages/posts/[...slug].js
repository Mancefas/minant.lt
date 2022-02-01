import React from "react";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";
import Layout from "../../components/layout";
import parse from "html-react-parser";

const SinglePost = (props) => {
  const { posts } = props;
  const router = useRouter();

  const possibleSlug = posts.map((item) => item.slug);

  let singlePost;

  if (posts) {
    const thisPost = posts.find((item) => item.slug === router.query.slug[0]);
    singlePost = thisPost;
  }

  return (
    <Layout>
      <div>
        {singlePost && (
          <div>
            <Typography
              variant="h3"
              align="center"
              sx={{ marginBottom: "3rem", marginTop: "2rem" }}
            >
              {singlePost.title.rendered}
            </Typography>
            <Container>{parse(singlePost.content.rendered)}</Container>
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
