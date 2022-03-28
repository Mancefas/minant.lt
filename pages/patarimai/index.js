import React, { useEffect } from "react";
import { Grid, Container, Typography, Paper } from "@mui/material";
import Link from "next/link";
import Layout from "../../components/layout";

const Posts = (props) => {
  const { posts } = props;

  // const postImg = posts.map((item) => {
  //   if (item["_links"]["wp:featuredmedia"] === undefined) {
  //     return {
  //       id: item.id,
  //       media: null,
  //     };
  //   }
  //   return {
  //     id: item.id,
  //     media: item["_links"]["wp:featuredmedia"],
  //     // link: `https://minant.lt/wp-json/wp/v2/media/${item.id}`,
  //   };
  // });
  // console.log(postImg);

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
        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          {posts.map((post) => (
            <Link href={`/patarimai/${post.slug}`} passHref>
              <Grid
                key={post.id}
                item
                md={4}
                xs={10}
                sx={{
                  minHeight: "40vh",
                  height: "fit-content",
                  cursor: "pointer",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    minHeight: "40vh",
                    height: "fit-content",
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

                  <Typography
                    align="center"
                    sx={{ marginTop: "1rem" }}
                    color={"red"}
                  >
                    Skaitykite daugiau
                  </Typography>
                </Paper>
              </Grid>
            </Link>
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
