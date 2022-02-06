import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import Link from "next/link";
import Layout from "../../components/layout";

const Posts = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <Container
        sx={{
          minHeight: "100vh",
          heigh: "fit-content",
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Grid container gap={2}>
          {posts.map((post) => (
            <Grid
              key={post.id}
              item
              xs={7}
              sx={{
                margin: "auto",
                backgroundColor: "#d2eec5",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h5">{post.title.rendered}</Typography>
              <Typography variant="subtitle1" color={"red"}>
                {post.date.slice(0, 10)}
              </Typography>
              <Typography variant="subtitle1">
                {post.excerpt.rendered.slice(3, 100)}...
              </Typography>
              <Link href={`/posts/${post.slug}`}>Skaitykite daugiau</Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://minant.lt/wp-json/wp/v2/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Posts;
