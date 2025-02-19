import React from "react";
import { motion } from "framer-motion";

const ProfileImage = ({ src, alt, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="w-8/12 lg:w-3/4"
    >
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
};

export default ProfileImage;
