import Head from "next/head";
import { Provider } from "react-redux";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";


export default function Home() {
  ReactDOM.render(
    <Provider store={}>
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
    </Provider>
  );
}
