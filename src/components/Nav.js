import React from "react";
import { Link } from "react-scroll";
import {BiHomeAlt , BiUser} from "react-icons/bi"
import {BsClipboardData , BsBriefcase , BsChatSquare } from "react-icons/bs"
const Nav = () => {
  return (
    <nav className="fixed bottom-3 1g:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-[150px] bg-[#5f0b74]/60 h-[60px] backdrop-blur-2x1 rounded-full  mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link to="home"   duration={300} activeClass="active" spy={true} smooth={true} className="cursor-pointer w-[50px] h-[50px] text-white  flex items-center justify-center">
            <BiHomeAlt  />
          </Link>

          <Link to="work" duration={300} activeClass="active" spy={true} smooth={true}  className="cursor-pointer w-[50px] h-[50px] text-white flex items-center justify-center">
            <BsBriefcase/>
          </Link>

        </div>
      </div>
    </nav>
  );
};
export default Nav;
