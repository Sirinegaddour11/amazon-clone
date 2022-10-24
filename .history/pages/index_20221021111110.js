import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Data from "../components/menu/Data";
import Mega from "../components/menu/Mega";
import ProductFeed from "../components/ProductFeed";

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
