"use client";
import React, { useContext, useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { ImFolderUpload } from "react-icons/im";
// import { useDropzone } from "react-dropzone";
import Image from "next/image";
import PostDesc from "./PostDesc/PostDesc";
import PostContent from "./PostContent/PostContent";

const AddPost = () => {
  const editorRef = useRef(null);
  const categoryRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    user_id: "",
    post_author: "",
    poster: "",
    title: "",
    content: "",
  });
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["აღწერა", "კონტენტი", "ატვირთვა"];

  const handleClick = (index) => {
    setActiveStep(index);
  };
  return (
    <>
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
        {steps.map((step, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center cursor-pointer ${
              activeStep === index
                ? "text-blue-600 dark:text-blue-500"
                : activeStep === 1 && index !== 2
                ? "text-green-500"
                : activeStep === 2
                ? "text-green-500"
                : ""
            }`}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border ${
                activeStep === index ? "border-blue-600" : "border-gray-500"
              } rounded-full shrink-0 ${
                activeStep === index
                  ? "dark:border-blue-500"
                  : "dark:border-gray-400"
              }`}
            >
              {index + 1}
            </span>
            {step}
            {index < steps.length - 1 && (
              <svg
                className={`w-3 h-3 ml-2 sm:ml-4 ${
                  activeStep === index
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-400 dark:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>

      {/* ///////////////////////////////////////////////////// */}
      {activeStep === 0 && (
        <PostDesc activeStep={activeStep} setActiveStep={setActiveStep} />
      )}

      {activeStep === 1 && (
        <PostContent activeStep={activeStep} setActiveStep={setActiveStep} />
      )}
    </>
  );
};

export default AddPost;
