import React from "react";
import HeroSection from "../components/HeroSection";
import SearchTIcket from "../components/SearchTIcket";
import InfoSection from "../components/InfoSection";
import Layout from "../layout/Layout";
import GetTickets from '../components/GetTickets'

const HomePage = () => {
  return (
    <Layout>
      <HeroSection children={<GetTickets/>} />
      <SearchTIcket />
      <InfoSection />
    </Layout>
  );
};

export default HomePage;
