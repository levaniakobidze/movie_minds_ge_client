"use client";
import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { ImFolderUpload } from "react-icons/im";

const PostDesc = ({
  setActiveStep,
}: {
  setActiveStep: (number: number) => void;
}) => {
  const [selectedImg, setSelectedImg] = useState("");
  const animatedComponents = makeAnimated();

  const handleClick = (index: number) => {
    setActiveStep(index);
  };

  const categoryOptions = [
    { label: "ფილმი", value: "ფილმი" },
    { label: "სერიალი", value: "სერიალი" },
    { label: "დოკუმენტური", value: "დოკუმენტური" },
    { label: "ანიმე", value: "ანიმე" },
    { label: "ანიმაცია", value: "ანიმაცია" },
  ];
  const generOptions = [
    { label: "საშინელებათა", value: "საშინელებათა" },
    { label: "დრამა", value: "დრამა" },
    { label: "კომედია", value: "კომედია" },
  ];
  return (
    <form className="mb-5">
      <div className="flex flex-wrap gap-5">
        <div className="relative   mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            სახელი
          </label>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="შეიყვანეთ სახელი"
            // value={bookContent.title}
            // onChange={(e) =>
            //   setBookContent((prev) => ({ ...prev, title: e.target.value }))
            // }
          />
        </div>
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            პოსტის ავტორი
          </label>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="პოსტის ავტორის სახელი და გვარი"
            // value={bookContent.author}
            // onChange={(e) =>
            //   setBookContent((prev) => ({ ...prev, author: e.target.value }))
            // }
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          აღწერა
        </label>
        <textarea
          id="message"
          placeholder="დაამატეთ აღწერა"
          // rows="4"
          // value={bookContent.description}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // placeholder="Write your thoughts here..."
          // onChange={(e) =>
          //   setBookContent((prev) => ({
          //     ...prev,
          //     description: e.target.value,
          //   }))
          // }
        ></textarea>
      </div>

      <div className="flex gap-5 flex-wrap">
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            კატეგორია
          </label>
          <Select
            options={categoryOptions}
            closeMenuOnSelect={false}
            components={animatedComponents}
          />
        </div>
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ჟანრი
          </label>
          <Select
            options={generOptions}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
          />
        </div>
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            წიგნის პოსტერი
          </label>
          <div className="flex justify-center items-center w-[110px] p-3 cursor-pointer text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <ImFolderUpload />
            <input
              className=""
              type="file"
              id="default-search"
              placeholder="შეიყვანეთ წიგნის სათაური"
            />
          </div>
          {selectedImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-[100px] mt-5 " src={selectedImg} alt="Selected" />
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <button
          onClick={(e) => {
            handleClick(0);
            e.preventDefault();
          }}
          className="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
        >
          წინა
        </button>
        <button
          onClick={(e) => {
            handleClick(1);
            e.preventDefault();
          }}
          className="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
        >
          შემდეგი
        </button>
      </div>
    </form>
  );
};

export default PostDesc;
