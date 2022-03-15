/** @format */

import React from 'react';
import '../../style/base.scss';
import '../../style/home.scss';
import Slider from './Home.Slider';
import Shipping from './Home.Shipping';
import Categories from './Home.Categories';
import BestSell from './Home.BestSell';
import Product from './Home.Product';
import BannerStatistics from './Home.BannerStatistics';
import BrandArea from './Home.Brandarea';
//
const Home = () => {
  return (
    <>
      <Slider />
      {/* Categories & Shipping */}
      <div className='categories'>
        <div className='container'>
          <Shipping />
          <Categories />
        </div>
      </div>
      <div className='product'>
        <Product />
      </div>
      <BestSell />
      <BannerStatistics />
      <BrandArea />
    </>
  );
};
export default Home;
