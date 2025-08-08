"use client";
import React, { useState } from "react";
import { ButtonLogin, MyMenu } from "../index";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

function NavBar() {
  const { user, login } = useAuth();
  const [nav, setNav] = useState();

  return (
    <div className="flex md:justify-between items-center text-white w-full p-0">
      <div className="w-[50%]">
        <Link href="./">LOGO</Link>
      </div>
      <div className="w-[50%] flex justify-around items-center">
        <Link href="./">Home</Link>
        <Link href="/instructions">Instructions</Link>
        {!user?.email?.length && !login ? <ButtonLogin /> : <MyMenu />}
      </div>
    </div>
  );
}

export default NavBar;
