import { MailIcon } from "@heroicons/react/solid";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className=" pt-[3rem] pb-2 lg:flex justify-around w-[80%] m-auto">
        <div>
          <img
            src="/logo.webp"
            alt="logo"
            className="w-[200px] object-contain cursor-pointer"
          />
          <p className="font-semibold w-[70%] py-4">
            Providing high quality DSA{" "}
            <span className="text-blue-500">(Free for All)</span>.
          </p>
        </div>
        <div className="flex justify-between lg:w-[80%] md:justify-between ">
          <div className="md:flex hidden flex-col space-y-2">
            <h1 className="font-bold text-xl mb-2">Helpful links</h1>
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

          <div className="flex flex-col space-y-2">
            <div>
              <h1 className="font-bold text-xl mb-2">Get in Touch</h1>
              <div className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5" />
                <span className="font-semibold">leadcoding98@gmail.com</span>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-2">Socails</h1>
              <div>
                <Link href="/">
                  <p className="nav-elements">Instagram</p>
                </Link>
                <Link href="/">
                  <p className="nav-elements">Twitter</p>
                </Link>
                <Link href="/">
                  <p className="nav-elements">Youtube</p>
                </Link>
              </div>
            </div>
            <span className="pt-4">Copyright © 2022 Lead Coding</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
