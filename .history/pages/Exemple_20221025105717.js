import React from 'react'
import Header from '../components/Header/Header'
import AmazonBusiness from '../components/menu/AmazonBusiness/AmazonBusiness';

function Exemple() {
  return (
    <div>
      <div className="flex items-center  space-x-8 p-1 pl-3 bg-amazon_blue-light text-white text-lg   ">
        <div className="drop  ">
          <div className="flex ">
            <div className="">
              Prime Video
              <div class="arrow down "></div>
              {/* <div className="a"></div> */}
            </div>
          </div>

          <div className="drop-content ">
            <div class="header">
              <h2>Prime Video</h2>
            </div>
            <MenuCarousel />
          </div>
        </div>
        <div className="drop  ">
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

export default Exemple
