"use client";
import React from "react";
import styles from "./dashboard.module.css";
// import "@headlessui/react/styles.css"; // Make sure to include the correct path
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineSafety,
  AiOutlineDollar,
} from "react-icons/ai";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import AddPost from "../components/DashboardComponents/AddPost/AddPost";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const Dashboard = () => {
  const [category, setCategory] = useState("main");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    {
      name: "პოსტის დამატება",
      href: "/dashboard/add_post",
      icon: AiOutlineDollar,
      current: true,
    },
    {
      name: "წიგნის კატეგორიები",
      href: "/admin/admin_categories",
      icon: AiOutlineDollar,
      current: true,
    },
    {
      name: "წიგნები",
      href: "/admin/admin_books",
      icon: AiOutlineHome,
      current: false,
    },
    {
      name: "ვიდეოები",
      href: "/admin/admin_videos",
      icon: AiOutlineHome,
      current: false,
    },
    {
      name: "იუზერები",
      href: "/admin/admin_users",
      icon: AiOutlineHome,
      current: false,
    },
  ];

  const renderComponent = () => {
    switch (category) {
      case "add_post":
        return <AddPost />;
      default:
        break;
    }
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-10 right-0  bg-red-500 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    {/* <Image
                      className="h-8 w-auto cursor-pointer rounded-full"
                      src={Bi}
                      alt="Your Company"
                    /> */}
                    <Link href="/">MovieMinds . ჯი</Link>
                  </div>
                  <div className="mt-5  h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={classNames(
                              `/dashboard/${category}` === item.href
                                ? "bg-gray-900 text-white"
                                : "text-gray-400 hover:bg-gray-700 hover:text-white",
                              "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-300"
                                  : "text-gray-400 group-hover:text-gray-300",
                                "mr-4 h-6 w-6 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col mt-[100px] shadow-lg">
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      `/dashboard/${category}` === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-blue-100",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-64">
          <main className="flex-1">
            <div className="py-6">
              <div className=" max-w-7xl px-4 sm:px-6 lg:px-4">
                {/* Your content */}
                {renderComponent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
