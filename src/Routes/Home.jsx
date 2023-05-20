import React from "react";
import Banner from "../Components/Banner";
import ImgGallery from "../Components/ImgGallery";
import Family from "../Components/Family";
import Review from "../Components/Review";
import SubCategory from "../Components/SubCategory";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ImgGallery></ImgGallery>
      <SubCategory></SubCategory>
      <Review></Review>
      <Family></Family>
    </div>
  );
};

export default Home;
