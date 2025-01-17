import React from "react";
import type { Metadata, NextPage } from "next";
import HomeComponent from "../Components/Home";

const HomePage: NextPage = () => <HomeComponent/>;

export const metadata: Metadata = {
  title: "Home",
};

export default HomePage;
