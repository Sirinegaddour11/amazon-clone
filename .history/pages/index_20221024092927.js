import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";

import ProductFeed from "../components/products";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}
