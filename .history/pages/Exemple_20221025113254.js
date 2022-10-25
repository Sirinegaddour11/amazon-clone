import MenuIcon from "@heroicons/react/outline/MenuIcon";
import React from "react";

import AmazonBusiness from "../components/menu/AmazonBusiness/AmazonBusiness";
import MenuCarousel from "../components/menu/MenuCarousel/MenuCarousel";
import Today from "../components/menu/TodaysDeals/Today";

function Exemple() {
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
  return (
    <div className="  flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      <div className="link flex items-center">
        <MenuIcon className="h-6 mr-1" />
        <div className="dropdown-content">
          {links.map((link) => (
            <a key={link.title} href={link.url} className="growing-hover">
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center  space-x-8 p-1 pl-3 bg-amazon_blue-light text-white text-lg   ">
        <div className="drop  ">
          <div className=" ">
            <div className="re">
              Prime Video
              <div class="arrow down "></div>
              <div className="after"></div>
            </div>
          </div>

          <div className="drop-content ">
            <div class="header">
              <h2>Prime Video</h2>
            </div>
            <MenuCarousel />
          </div>
        </div>
        <div className="drop">
          <div className="flex  ">
            <div className="cursor-pointer ">
              Amazon Business
              <i class="arrow down "></i>
              {/* <div className="a "></div> */}
            </div>
          </div>

          <div className="drop-content ">
            {/* <div className="b"></div> */}
            <div class="header">
              <h2>Amazon Business</h2>
            </div>
            <AmazonBusiness />
          </div>
        </div>
        <div className="drop  ">
          <div className="flex ">
            <div className="cursor-pointer ">
              Today s Deals
              <i class="arrow down "></i>
              {/* <div className="a"></div> */}
            </div>
          </div>

          <div className="drop-content ">
            {/* <div className="c"></div> */}
            <div class="header">
              <h2>Today s Deals</h2>
            </div>
            <Today />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exemple;
