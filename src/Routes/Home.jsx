import React from "react";
import Banner from "../Components/Banner";
import ImgGallery from "../Components/ImgGallery";
import Family from "../Components/Family";
import Review from "../Components/Review";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ImgGallery></ImgGallery>
      <Review></Review>
      <Family></Family>
    </div>
  );
};

export default Home;
