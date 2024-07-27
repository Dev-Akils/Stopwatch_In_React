import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import Kiat from "../assets/coin.png"
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";



const Header = () => {
  return (
    <>



      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
      <header>

        {/* <div className="h-[50px] bg-[#394782]"> </div> */}
        <div className="nav-area relative flex items-start">
         {/* <div className="flex gap-5"> <Link to="/" className="logo flex items-center relative container">
            <img className="w-[60px] mt-[14px]" src="" alt /> <p style={{ fontFamily: "Nunito,sans-serif" }} className=" text-white text-[15px] lg:text-[30px] font-extrabold lg:ml-[-10px] md:ml-[0px] md:text-[15px] sm:ml-[0px] sm:text-[15px]">Exchange</p>
          </Link> */}

          {/* for large screens */}
          <h1 className="text-[40px]  font-bold">Exchange</h1>
          <Navbar />
         <div className="flex gap-10">
         <MdMessage />
         <MdMessage />
         <IoMdNotifications />
         </div>

          {/* for small screens */}
          <MobileNav />
        </div>
      </header>
    </>

  );
};

export default Header;
