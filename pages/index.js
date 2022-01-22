import Head from "next/head";
import Layout from "./components/layout";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>minant.lt - dviračių straipsniai, maršrutai, aksesuarai.</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
