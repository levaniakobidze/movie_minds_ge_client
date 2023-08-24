"use client";
import React, { useContext, useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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

  const formData = new FormData();

  return (
    <>
      <form className="mb-5">
        <div className="relative">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            წიგნის სათაური
          </label>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="სათაური"
            // value={bookContent.title}
            // onChange={(e) =>
            //   setBookContent((prev) => ({ ...prev, title: e.target.value }))
            // }
            required
          />
        </div>
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            წიგნის ავტორი
          </label>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="შეიყვანეთ წიგნის სათაური"
            // value={bookContent.author}
            // onChange={(e) =>
            //   setBookContent((prev) => ({ ...prev, author: e.target.value }))
            // }
            required
          />
        </div>
        <div className="relative mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            წიგნის კატეგორიები
          </label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            // options={colourOptions}
            // styles={customStyles}
            // onChange={handleSelect}
          />
        </div>
        <div className="flex gap-5">
          <div className="relative mt-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              წიგნის პოსტერი
            </label>
            <div
              className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // {...getRootProps()}
            >
              <input
                // {...getInputProps()}
                type="file"
                id="default-search"
                placeholder="შეიყვანეთ წიგნის სათაური"
                // onChange={handleSelectPoster}
                required
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
          <div className="relative mt-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              წიგნის ფასი
            </label>
            <input
              type="number"
              id="default-search"
              className="block w-full p-4 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="შეიყვანეთ წიგნის სათაური"
              //   value={bookContent.price}
              //   onChange={(e) =>
              //     setBookContent((prev) => ({
              //       ...prev,
              //       price: Number(e.target.value),
              //     }))
              //   }
              required
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            წიგნის აღწერა
          </label>
          <textarea
            id="message"
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
      </form>

      <div className="mt-[100px]">
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
      </div>
      <form className="mt-5">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="შეიყვანეთ გვერდის სათაური"
            // value={pagetTitle}
            // onChange={(e) => setPageTitle(e.target.value)}
            required
          />
        </div>
      </form>
    </>
  );
};

export default AddPost;
