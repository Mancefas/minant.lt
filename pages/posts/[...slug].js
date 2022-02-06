import React from "react";
import { useRouter } from "next/router";
import { Container, Typography, Paper } from "@mui/material";
import Layout from "../../components/layout";
import parse from "html-react-parser";

const SinglePost = (props) => {
  const { posts } = props;
  const router = useRouter();

  // const possibleSlug = posts.map((item) => `/posts/${item.slug}`);

  let snglPost;

  if (posts) {
    const thisPost = posts.find((item) => item.slug === router.query.slug[0]);
    snglPost = thisPost;
  }

  return (
    <Layout>
      <div>
        {snglPost && (
          <div>
            <Typography
              variant="h3"
              align="center"
              sx={{ marginBottom: "1rem", marginTop: "2rem" }}
            >
              {snglPost.title.rendered}
            </Typography>
            <Container maxWidth="lg">
              <Paper
                elevation={3}
                sx={{
                  padding: "1rem",
                  marginBottom: "2rem",
                  borderRadius: "10px",
                }}
              >
                {parse(snglPost.content.rendered)}
              </Paper>
            </Container>
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
      "/posts/dviraciu-tipai",
    ],
    fallback: false,
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
