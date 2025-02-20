import React from "react";

const PoweredIcon = ({ children }) => {
  return (
    <div className="p-2 rounded-full border-4 border-x-primary hover:scale-110">
      {children}
    </div>
  );
};

export default PoweredIcon;
