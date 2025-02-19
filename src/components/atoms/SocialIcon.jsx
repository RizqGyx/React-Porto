import React from "react";

const SocialIcon = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-primary"
    >
      <Icon className="text-2xl" />
    </a>
  );
};

export default SocialIcon;
