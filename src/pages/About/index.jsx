import Header from "components/Header";
import React from "react";
import Footer from "components/Footer";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">About Blogsly</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              At Blogsly, our mission is to provide a platform where both
              writers and listeners can connect, share, and learn through
              engaging blog posts and insightful podcasts. We aim to inspire,
              inform, and entertain our audience with high-quality content
              across various topics.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
            <p className="text-gray-700">
              Blogsly offers a diverse range of content, including written
              articles and audio podcasts. Our blog features articles covering
              topics such as technology, lifestyle, health, finance, and more.
              Additionally, our podcast series delves into deeper discussions on
              various subjects, providing valuable insights and entertainment
              for our listeners.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            Thank you for being a part of the Blogsly community. We appreciate
            your support!
          </p>
        </div>
      </div>
      <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] sm:p-5 bg-gray-600_01" />
    </div>
  );
};

export default About;
