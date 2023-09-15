/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import axios from "axios";
import { login } from "../../redux/slices/authSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

// Test login function
const Verify_email = () => {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    // dispatch(login());

    try {
      await axios.post(
        "https://wild-pink-spider-gown.cyclic.app/api/v1/user/login",
        {
          email: "levaniakobidze25@gmail.com",
          password: "levani123",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="gradient-form min-h-[110vh] flex justify-center items-center  bg-neutral-200 dark:bg-gray-700">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block w-full bg-white shadow-lg dark:bg-[#181a2a]">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Lotus Tea
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">შედით თქვენს ანგარიშში</p>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >
                            ელ.ფოსტა
                          </label>
                        </div>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          >
                            პაროლი
                          </label>
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            onClick={handleLogin}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            შესვლა
                          </button>

                          <a href="#!">დაგავიწყდა პაროლი?</a>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">არ გაქვს ანგარიში?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            დარეგისტრირდი
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="relative flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    // style={{
                    //   backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNnCGoADPqqTBr2lRF0oeP1CBHXXVsu7_FRQMKn9ebgdF0EeBI3gvakPyICRQ-a48K9A&usqp=CAU')`,
                    //   // backgroundSize: "cover",
                    //   backgroundPosition: "center",
                    //   backgroundRepeat: "no-repeat",
                    //   objectFit: "contain",
                    // }}
                  >
                    <img
                      className="absolute top-0 left-0 w-full h-[100%] object-cover z-0"
                      src="https://w0.peakpx.com/wallpaper/831/78/HD-wallpaper-john-wick-hohn-vik-wik.jpg"
                      alt="asda"
                    />
                    <div className=" z-10 px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify_email;