import React from "react";
import { BsGithub} from 'react-icons/bs'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-[#1F222A] dark:text-neutral-200 lg:text-left border-b-[2px] dark:border-[#ffffff0d]">
      <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 mx-auto py-4 lg:justify-between px-5">
        <div className="hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div className="block lg:hidden">
        <a href="/"><img src={localStorage.getItem('theme') === 'light' ? "/LogoW.png" : "/LogoD.png"} className='h-[80px]' alt="Logo" /></a>
        </div>

        <div className="flex items-center text-2xl mt-4 lg:mt-0">
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaFacebookF className="hover:text-primary"/>
          </a>
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTwitter className="hover:text-primary"/>
          </a>
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <AiOutlineGooglePlus className="text-2xl hover:text-primary"/>
          </a>
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <BiLogoInstagramAlt className="text-xl hover:text-primary"/>
          </a>
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaLinkedinIn className="hover:text-primary"/>
          </a>
          <a href="#" className="text-neutral-600 dark:text-neutral-200">
            <BsGithub className="hover:text-primary"/>
          </a>
        </div>
      </div>

      <div className="bg-neutral-200 p-4 text-center dark:bg-[#1F222A] border-t-2 rounded-full border-neutral-200 dark:border-neutral-500">
        <span>© 2023 Copyright - Muhammad Rizki</span>
      </div>
      
    </footer>
  );
};

export default Footer;
