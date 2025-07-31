import React from "react";
import { ButtonLogin, MyMenu } from "../intex";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link href="./">LOGO</Link>
      </div>
      <div className="flex">
        <Link href="./">Home</Link>
        <Link href="/instructions">Instructions</Link>
        <ButtonLogin />
        <MyMenu />
      </div>
    </div>
  );
}

export default NavBar;
