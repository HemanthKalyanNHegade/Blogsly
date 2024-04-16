import Header from "components/Header";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg ">
            <p className="text-lg mb-2">Phone Number:</p>
            <a href="tel:+123456789" className="text-blue-500">
              9382398312
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg mb-2">Email:</p>
            <a href="mailto:contact@example.com" className="text-blue-500">
              hemanthkalyan123@gmail.com
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg mb-2">LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="text-blue-500"
            >
              https://www.linkedin.com/in/
            </a>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg mb-2">Instagram:</p>
            <a
              href="https://www.instagram.com/yourprofile"
              className="text-blue-500"
            >
              https://www.instagram.com
            </a>
          </div>
          <div className="mt-8 flex flex-row justify-around">
            <div className="mt-10">
              <img
                src="images/contact-img.svg"
                alt="Contact Image"
                className="w-64 mx-auto rounded-lg"
              />
            </div>
            <div className="mt-32">
              <img
                src="images/img_group_150.svg"
                alt="Contact Image"
                className="w-64 mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
