import React from "react";
import { Text, Img, Heading, Button, Input } from "../../components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700">
        <div className="flex flex-row sm:flex-col justify-between items-center w-[55%] md:w-full ml-[139px] md:ml-5 sm:gap-10">
          <Link to="/">
            <Img
              src="images/img_group_150.svg"
              alt="image"
              className="h-[24px]"
            />
          </Link>
          <div className="flex flex-row justify-between items-center w-[53%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
              <Link to="/">
                <Heading
                  as="h6"
                  className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer hover:font-light hover:underline underline-offset-1 hover:text-2xl"
                >
                  Home
                </Heading>
              </Link>
            </div>
            <Link to="/bloggerdetails">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer hover:font-light hover:underline underline-offset-1 hover:text-2xl"
              >
                Podcast
              </Heading>
            </Link>
            <Link to="/blogdetails">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer hover:font-light hover:underline underline-offset-1 hover:text-2xl"
              >
                Blog
              </Heading>
            </Link>
            <Link to="/about">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer hover:font-light hover:underline underline-offset-1 hover:text-2xl"
              >
                About
              </Heading>
            </Link>
            <Link to="/contact">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center cursor-pointer hover:font-light hover:underline underline-offset-1 hover:text-2xl"
              >
                Contact
              </Heading>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
