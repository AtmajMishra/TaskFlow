import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import { Paperclip, Settings} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className=" sticky top-0 z-50  shadow-sm backdrop-blur-md border-b border-gray-200 font-sans" style={{
    background: 'linear-gradient(to right,rgb(16, 7, 7),rgb(75, 26, 26),rgb(99, 63, 63))',
  }}>
      <div className=" flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto">
        {/* Logo can be added here */}
        <div
          className=" flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate('/')} >
          {/*LOGO*/}
          <div
            className="relative w-10 h-10 flex items-center justify-center rounded-xl 
            bg-gradient-to-br from-red-500 
            via-aqua-500 to-indigo-500 shadow-lg group-hover:shadow-purple-300/50 
             group-hover:scale-105 transition-all duration-300 ">
          
            <Paperclip className="w-6 h-6 text-white" />
            <div className=' absolute -bottom-1 -middle-1 w-3 h-3 bg-white rounded-full shadow-md animate-ping'/>
          </div>
          {/*Brand Name*/}
          <span className='text-2xl font-extrabold bg-gradient-to-r from-red-500 via-aqua-500 to-indigo-500 bg-clip-text text-transparent tracking-wide '>
            TaskManager
          </span>
        </div>
        {/*Right Side*/}
        <div className="flex items-center gap-4">
            <button className='group p-2 text-white hover:text-grey transition-colors duration-300 hover:bg-black rounded-full'
        onClick={()=>navigate('/profile')}
        >
          <Settings className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-90"/>
        </button>
        {/*abcd */}
        
        </div>
      
      </div>
    </header>
  );
};

export default Navbar;
