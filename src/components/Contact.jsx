import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center flex-col pt-28 mb-8' id='contact'>
        <h1 className='text-black/70 dark:text-white font-bold text-3xl'>Contact Me</h1>
        <h2 className='bg-clip-text text-transparent font-bold text-4xl bg-gradient-to-r from-pink-500 to-violet-500 pb-5'>Let's Work Together</h2>
        <div className='flex flex-col items-center justify-between shadow-xl w-10/12 py-9 dark:bg-neutral-800 rounded-2xl lg:flex-wrap lg:flex-row lg:justify-evenly'>
            <div className="relative flex justify-center -translate-y-1 lg:hidden">
                <img src="/LogoT.png" width={75} height={75} alt="Me" className="-translate-y-4"/>
                <span className="absolute bottom-0 -z-10">
                    <svg width={150} height={150} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#08BDBA"
                        d="M42.6,-73.3C56.5,-65.8,69.9,-56.9,78.9,-44.5C87.9,-32.1,92.4,-16,91.3,-0.6C90.2,14.7,83.4,29.5,74.9,42.8C66.5,56.2,56.3,68.1,43.6,76.7C30.8,85.3,15.4,90.6,1.2,88.5C-12.9,86.3,-25.9,76.8,-40.3,69.1C-54.6,61.4,-70.4,55.6,-80.3,44.4C-90.1,33.2,-94,16.6,-91.3,1.6C-88.5,-13.4,-79.2,-26.9,-70.5,-40.1C-61.8,-53.3,-53.8,-66.3,-42.1,-75.1C-30.5,-84,-15.3,-88.7,-0.5,-87.9C14.4,-87.1,28.7,-80.9,42.6,-73.3Z"
                        transform="translate(100 100)"
                    />
                    </svg>
                </span>
            </div>
            <div className='w-1/4 flex items-center justify-center'>
                <img src="/FrontMe.png" alt="Me" className='hidden lg:block'/>
            </div>
            <form className='flex flex-col w-3/4 lg:w-1/2 gap-3 lg:items-center'>
                <input className='px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]' type="text" placeholder='Name'/>
                <input className='px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]' type="email" placeholder='Email'/>
                <input className='px-2 p-1 lg:p-2 rounded-xl dark:text-white dark:bg-neutral-800 border-2 lg:w-full border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]' type="text" placeholder='Subject' />
                <textarea name="text" cols="30" rows="5" placeholder='Project Details' className='px-2 lg:p-2 resize-none rounded-xl dark:text-white lg:w-full dark:bg-neutral-800 border-2 border-[rgba(0,0,0,0.3)] dark:border-[rgba(255,255,255,0.3)]'></textarea>
                <input type="submit" value="Contact" className='rounded-full lg:w-full bg-primary hover:bg-teal-700 p-2 lg:p-2 font-bold text-white dark:text-slate-300 cursor-pointer' />
            </form>
        </div>
    </div>
  )
};

export default Contact;
