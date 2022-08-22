import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Meet from "../components/Meet";
import CTA from "../components/CTA";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>LeadCoding </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="mt-[6rem]">
        <Banner />
        <Meet />
        <CTA />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
