import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">back</Link>
    </Layout>
  );
}
