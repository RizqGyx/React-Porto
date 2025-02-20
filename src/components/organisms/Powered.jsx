import React from "react";
import PoweredTitle from "../atoms/PoweredTitle";
import PoweredIcons from "../molecules/PoweredIcons";

const Powered = () => {
  return (
    <div className="pt-36 lg:pt-16">
      <div className="w-10/12 mx-auto flex justify-between items-center flex-col px-2 lg:flex-row">
        <PoweredTitle text="This Portfolio Powered By" />
        <PoweredIcons />
      </div>
    </div>
  );
};

export default Powered;
