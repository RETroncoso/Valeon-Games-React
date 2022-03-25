import React from "react";
import Hero from "../Components/Hero/Hero";
import { ProductsContainer } from "../Components/Products/ProductsContainer";
import { CustomInput } from "../Components/CustomInput/CustomInput";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <CustomInput
        onChange
        placeholder="Buscar..."
        paddingLeft="10px"
        width="80%"
      />
      <ProductsContainer />
    </>
  );
};

export default Home;
