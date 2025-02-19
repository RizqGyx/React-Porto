import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SocialIcon from "../atoms/SocialIcon";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center text-2xl mt-4 lg:mt-0">
      <SocialIcon href="#" Icon={FaFacebookF} />
      <SocialIcon href="#" Icon={FaTwitter} />
      <SocialIcon href="#" Icon={AiOutlineGooglePlus} />
      <SocialIcon href="#" Icon={BiLogoInstagramAlt} />
      <SocialIcon href="#" Icon={FaLinkedinIn} />
      <SocialIcon href="#" Icon={BsGithub} />
    </div>
  );
};

export default SocialMediaLinks;
