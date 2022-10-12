import Head from "next/head";
import Login from "../components/Auth/login";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
// import { getSession } from "next-auth/client";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
<Login />
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}
