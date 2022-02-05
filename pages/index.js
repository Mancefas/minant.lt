import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>minant.lt - dviračių straipsniai, maršrutai, aksesuarai.</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
