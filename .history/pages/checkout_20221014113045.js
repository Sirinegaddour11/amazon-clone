/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import groupBy from "lodash.groupby";

function checkout() {
  const items = useSelector(selectItems);
  // const groupe = groupBy(items, "id");

      groupe = items.reduce(function (r, a) {
        r[a.make] = r[a.make] || [];
        r[a.make].push(a);
        return r;
      }, Object.create(null));

      console.log(result);

  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-50 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Shopping Basket"}
            </h1>
            {groupe.map((group, i) => (
              <CheckoutProduct
                key={i}
                id={group.id}
                title={group.title}
                rating={group.rating}
                price={group.price}
                description={group.description}
                category={group.category}
                image={group.image}
                hasPrime={group.hasPrime}
                quantity={group.length}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>
              <button className=" button mt-2 from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300">
                Sign in to checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
