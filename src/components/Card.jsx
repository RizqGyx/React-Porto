import React from "react";

function Card({url,title,desc,project}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-solid border-black/25 dark:border-white/50 bg-light shadow-primary shadow-md text-black/70 dark:text-white/70">
      <div className="p-5 flex flex-col max-w-sm gap-3">
        <img className="rounded-xl w-full object-cover h-[200px]" src={url}/>
        <h1 className="font-bold text-2xl text-black/90 dark:text-white px-2">{title}</h1>
        <p className="px-5 text-justify">{desc}</p>
      </div>
      <button className="bg-primary rounded-b-2xl font-bold p-2 hover:bg-teal-700"><a href={project} target="_blank">View</a></button>
    </div>
  );
}

export default Card;
