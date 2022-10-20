import Image from "next/image";
import { useRouter } from "next/router";
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import React from "react";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
const links = [
  { title: "Prime Video", url: "" },
  { title: "Amazon Business", url: "" },
  { title: "Today s Deals", url: "" },
  { title: "Electronics", url: "" },
  { title: "Foods & Grocery", url: "" },
  { title: "Prime", url: "" },
  { title: "Buy Again", url: "" },
  { title: "Shopper Toolkit", url: "" },
  { title: "Health & Personal", url: "" },
];
function Header() {
  const router = useRouter();

  const items = useSelector(selectItems);
  //const ss = useSelector(modeSession);

  return (
    <header className="sticky top-0 z-50">
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            alt="aaa"
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer active:transform active:scale-90"
          />
        </div>

        {/* Custom search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            placeholder={"🔎 Search in products listed below…"}
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link cursor-pointer">
            <p
              onClick={() => router.push("/Login")}
              className="hover:underline"
            >
              Hello
            </p>
            <p className=" tooltip font-extrabold md:text-sm">
              Account & Lists
              <span className="tooltiptext"> Account & Lists</span>
            </p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="tooltip font-extrabold md:text-sm">
              & Orders
              <span className="tooltiptext fo">Returns & Orders</span>
            </p>
          </div>
          <div
            className=" relative link flex items-center cursor-pointer"
            onClick={() => router.push("/checkout")}
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4
               bg-yellow-400 text-center rounded-full text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />

            <p className="tooltip hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
              <span className="tooltiptext">Basket</span>
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="dropdown link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          <div className="dropdown-content">
            {links.map((link) => (
              <a key={link.title} href={link.url} className="growing-hover">
                {link.title}
              </a>
            ))}
          </div>
        </div>
        {links.map((link) => (
          <p className="link" key={link.title}>
            {link.title}
          </p>
        ))}
      </div>
    </header>
  );
}

export default Header;
