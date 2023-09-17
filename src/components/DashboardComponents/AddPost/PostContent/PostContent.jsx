"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const PostContent = ({ setActiveStep }) => {
  const handleClick = (index) => {
    setActiveStep(index);
  };

  return (
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
  );
};

export default PostContent;
