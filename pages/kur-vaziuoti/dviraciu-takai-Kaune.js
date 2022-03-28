import React from "react";
import Layout from "../../components/layout";
import { Container, Paper } from "@mui/material";
import parse from "html-react-parser";

const dviraciuTakaiKaune = (props) => {
  const { posts } = props;
  console.log(props.posts);

  let takaiKaune;

  if (posts) {
    const singleTakaiKaune = posts.find(
      (item) => item.slug === "dviraciu-takai-kaune"
    );
    takaiKaune = singleTakaiKaune;
  }
  return (
    <Layout>
      <Container>
        <Paper sx={{ padding: "1rem" }}>
          {parse(takaiKaune.content.rendered)}
        </Paper>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://minant.lt/wp-json/wp/v2/pages");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default dviraciuTakaiKaune;
