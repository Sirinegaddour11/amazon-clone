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

  //   const groupe = items.reduce(function (r, a) {
  //     r[a.id] = r[a.id] || [];
  //      r[a.id].push(a);
  //     return r;
  //   }, Object.create(null));

  //   console.log("groupe", groupe);

  //   const tot = Object.values(groupBy(items, "id"));
  // console.log("tot",tot)
  const total = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity *currentValue.pri,
    0
  );
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
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({total} items):{" "}
                <span className="font-bold">
                  <Currency quantity={totalPrice} currency="EUR" />
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
