import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed w-full z-50 p-6 shadow-light-300 sm:px-12 gap-5 dark:shadow-none">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="Devflow logo"
          height={23}
          width={23}
        ></Image>
      </Link>

      <p>Global search</p>

      <div className="flex-between gap-5">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
