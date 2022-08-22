{
  /* Responsive navbar is still incomplete  */
}
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const [openHamb, setOpenHamb] = useState(false);
  return (
    <nav className="flex px-2 bg-white z-[99] fixed h-max top-0 left-0 w-screen items-center justify-between">
      <div className="ml-4">
        <Image
          src="/logo.webp"
          alt="logo"
          height={80}
          width={180}
          className="object-contain cursor-pointer"
        />
      </div>
      <div className="flex space-x-[2.5rem] mr-[2rem] items-center">
        <div className="md:flex space-x-[1.2rem] hidden">
          <Link href="/">
            <p className="nav-elements">Home</p>
          </Link>
          <Link href="/">
            <p className="nav-elements">DSA Courses</p>
          </Link>
          <Link href="/">
            <p className="nav-elements">Subjects</p>
          </Link>
          <Link href="/">
            <p className="nav-elements">DSA Sheets</p>
          </Link>
        </div>
        <button className="bg-blue-700 hidden md:inline-flex hover:bg-blue-600 text-white p-2 rounded-md">
          Get Free Class
        </button>
        <div className="md:hidden inline-flex">
          {openHamb ? (
            <XIcon
              className="h-8 w-8 cursor-pointer text-gray-600 hover:text-gray-900"
              onClick={() => setOpenHamb(!openHamb)}
            />
          ) : (
            <MenuIcon
              className="h-8 w-8 cursor-pointer text-gray-600 hover:text-gray-900"
              onClick={() => setOpenHamb(!openHamb)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
