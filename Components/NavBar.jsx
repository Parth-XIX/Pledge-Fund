import React, { useState, useContext } from "react";

//Internal Import
import { Pledge_Fund_Context } from "../Context/Plegde_Fund";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(Pledge_Fund_Context);
    const menuList = ["White Paper", "Project", "Donation", "Members"];
    return (
      <div class="backgroundMain">
        <div class = "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class = "relative flex items-center justify-between">
            <div class = "flex items-center">
              <a
                href = "/"
                aria-label="Company"
                title = "Company"
                class = "inline-flex items-center mr-8"
              >
                <Logo color = "text-white"/>
                <span class = "ml-2 text-ml font-bold tracking-wide text-gray-100 uppercase">
                  Pledge Fund
                </span>
              </a>
              <ul class = "flex items-center hidden space-x-8 lg:flex">
                {menuList.map((el, i) => (
                  <li key = {i+1}>
                    <a
                      href="/"
                      aria-label="Our Product"
                      title ="Our Product"
                      class = "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        {el}
                    </a>
                  </li>
                ))}
              </ul>  
            </div>
            {!currentAccount && (
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <button
                    onClick = {() => connectWallet()}
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent=700 focus:shadow-outline focus:outline-none background"
                    aria-lable="Sign up"
                    title="Sign Up"
                    >
                      Connect Wallet
                    </button>
                </li>
              </ul>
            )}
            <div class="lg:hidden z-40">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu/>
              </button>
              {isMenuOpen &&(
                <div class="absolute top-0 left-0 w-full">
                    //1:16:40
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}