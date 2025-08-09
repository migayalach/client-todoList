"use client";
import React, { useState } from "react";
import { ButtonLogin, MyMenu } from "../index";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

function NavBar() {
  const { user, login } = useAuth();
  const [current, setCurrent] = useState("home");

  const changeCurrent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setCurrent(event.currentTarget.id);
  };

  return (
    <div className="flex md:justify-between items-center text-white w-full p-0">
      <div className="w-[30%]">
        <Link
          className="no-underline hover:no-underline hover:text-inherit"
          href="./"
          id="home"
          onClick={changeCurrent}
        >
          LOGO
        </Link>
      </div>
      <div className="w-[70%] flex justify-around items-center">
        <div
          className={
            current === "home"
              ? "bg-white w-24 flex justify-center items-center"
              : ""
          }
        >
          <Link href="./" id="home" onClick={changeCurrent}>
            <span
              className={
                current === "home" ? "text-[#000] text-[16px]" : "text-[15px]"
              }
            >
              Home
            </span>
          </Link>
        </div>

        <div
          className={
            current === "instructions"
              ? "bg-white w-24 flex justify-center items-center"
              : ""
          }
        >
          <Link href="/instructions" id="instructions" onClick={changeCurrent}>
            <span
              className={
                current === "instructions"
                  ? "text-[#000] text-[16px]"
                  : "text-[15px]"
              }
            >
              Instructions
            </span>
          </Link>
        </div>
        {!user?.email?.length && !login ? (
          <ButtonLogin />
        ) : (
          <div>
            <MyMenu />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
