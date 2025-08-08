"use client";
import React from "react";
import { ButtonLogin, MyMenu } from "../index";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

function NavBar() {
  const { user, login } = useAuth();

  return (
    <div className="flex justify-between items-center">
      <div>
        <Link href="./">LOGO</Link>
      </div>
      <div className="flex">
        <Link href="./">Home</Link>
        <Link href="/instructions">Instructions</Link>
        {!user?.email?.length && !login ? <ButtonLogin /> : <MyMenu />}
      </div>
    </div>
  );
}

export default NavBar;
