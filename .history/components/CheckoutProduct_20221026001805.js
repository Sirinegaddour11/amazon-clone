/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import StarIcon from "@heroicons/react/solid/StarIcon";
import MinusSmIcon from "@heroicons/react/solid/MinusSmIcon";
import PlusIcon from "@heroicons/react/solid/PlusIcon";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  removeItems,
} from "../slices/basketSlice";
function CheckoutProduct({ product }) {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
    quantity,
  } = product;


  
  const addItemToBasket = (product) => {
    // Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = (id) => {
    // Remove item from redux
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5 mb-4 sm:mb-0">
        <p className="my-3">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs mt-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Rigth buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="flex justify-between xs:justify-start">
          <button
            className="button sm:p-1"
            onClick={() => removeItemFromBasket(id)}
          >
            <MinusSmIcon className="h-5 text-black" />
          </button>
          <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
            Quantity: <span className="font-bold">{quantity}</span>
          </div>
          <button
            className="button sm:p-1"
            onClick={() => addItemToBasket(product)}
          >
            <PlusIcon className="h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
