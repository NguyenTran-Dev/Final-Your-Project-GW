/** @format */

import React from "react";
import { useMediaQuery } from "react-responsive";

import { Carousel } from "antd";

const BrandArea = () => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  return (
    <>
      {isMoblie ? (
        <Carousel autoplay>
          <div className="mobieslider">
            <img src="Images/brand/br1.png" />
            <img src="Images/brand/br4.png" />
          </div>
          <div className="mobieslider">
            <img src="Images/brand/br2.png" />
            <img src="Images/brand/br5.png" />
          </div>
          <div className="mobieslider">
            <img src="Images/brand/br3.png" />
            <img src="Images/brand/br6.png" />
          </div>
        </Carousel>
      ) : (
        <div className=" container">
          <div className="brandarea">
            <div className="brandarea__content">
              <img src="Images/brand/br1.png" />
              <img src="Images/brand/br2.png" />
              <img src="Images/brand/br3.png" />
              <img src="Images/brand/br4.png" />
              <img src="Images/brand/br5.png" />
              <img src="Images/brand/br6.png" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandArea;
