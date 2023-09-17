"use client";
import React, { useContext, useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ImFolderUpload } from "react-icons/im";

const AddPost = () => {
  const editorRef = useRef(null);
  const categoryRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const animatedComponents = makeAnimated();

  //   const { getRootProps, getInputProps } = useDropzone({
  //     accept: "image/*",
  //     multiple: false,
  //     onDrop: (acceptedFiles) => {
  //       const file = acceptedFiles[0];

  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         const base64String = reader.result;
  //         setSelectedImg(base64String);
  //       };

  //       reader.readAsDataURL(file);
  //     },
  //   });

  //   useEffect(() => {
  //     if (editorRef.current) {
  //       editorRef.current.setContent(pageContent.content || "");
  //     }
  //   }, [pageContent]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["აღწერა", "კონტენტი", "ატვირთვა"];

  const handleClick = (index) => {
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
                <img
                  className="w-[100px] mt-5 "
                  src={selectedImg}
                  alt="Selected"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mt-5">
            <button
              onClick={(e) => {
                handleClick(0);
                e.preventDefault();
              }}
              class="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
            >
              წინა
            </button>
            <button
              onClick={(e) => {
                handleClick(1);
                e.preventDefault();
              }}
              class="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
            >
              შემდეგი
            </button>
          </div>
        </form>
      )}

      {activeStep === 1 && (
        <div className="mt-10">
          <Editor
            apiKey="vzkfeug5q4me46sye4gvez1nd382k6hwqpx9loke76rq1f7i"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: "favs file edit  view insert format tools table",
              content_css: "editor.css",
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | fontsizeselect | customFontsizeselect | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | table | image media | help",
              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
              setup: (editor) => {
                var newColor = document.createElement("style");
                document.head.appendChild(newColor);
                newColor.sheet.insertRule("#editor_ifr {background: blue}");
                editor.ui.registry.addButton("customFontsizeselect", {
                  text: "Font Size",
                  type: "menubutton",
                  fetch: (callback) => {
                    const items = [
                      { text: "Tiny", value: "8pt" },
                      { text: "Small", value: "10pt" },
                      { text: "Normal", value: "12pt" },
                      { text: "Large", value: "14pt" },
                      { text: "Huge", value: "18pt" },
                    ];
                    callback(items);
                  },
                  onAction: (buttonApi) => {
                    const value = buttonApi.value;
                    editor.execCommand("fontSize", false, value);
                  },
                  onSetup: (buttonApi) => {
                    buttonApi.onAction = () => buttonApi.onAction();
                  },
                });
              },
            }}
          />
          <div className="flex justify-between items-center mt-5">
            <button
              onClick={(e) => {
                handleClick(0);
                e.preventDefault();
              }}
              class="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
            >
              წინა
            </button>
            <button
              onClick={(e) => {
                handleClick(2);
                e.preventDefault();
              }}
              class="bg-cyan-900 w-[100px] hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
            >
              შემდეგი
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPost;
