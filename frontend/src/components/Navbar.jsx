import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileIcon from "../assets/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isVip = true;
  const vipExpireDate = "2025-12-31";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white flex justify-between items-center px-0 py-3 w-full m-0 relative">
      {/* Logo */}
      <div className="flex items-center ml-[20px]">
        <img src={logo} alt="Logo" className="h-[40px]" />
      </div>

      {/* Nav Links */}
      <ul className="flex gap-[100px] list-none m-0 p-0">
        {["首页", "AI自测", "模拟考试", "专项练习", "题库", "关于我们"].map((text, index) => (
          <li key={index}>
            <Link
              to={`/${text}`}
              className="text-[#333] no-underline font-normal text-[16px] hover:text-orange-500 transition-colors duration-300"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile */}
      <div className="flex items-center mr-[20px]" ref={dropdownRef}>
        <img
          src={profileIcon}
          alt="User"
          className="w-[40px] h-[40px] rounded-full border-2 border-orange-500 hover:border-orange-700 transition-colors duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-[50px] right-0 bg-white shadow-lg rounded-lg z-[1000] min-w-[180px] opacity-100 translate-y-0 transition-all duration-300">
            <ul className="list-none m-0 p-0">
              <li className="px-4 py-2 text-sm text-[#333] border-b border-[#eee]">
                {isVip ? (
                  <>
                    <span className="text-orange-500 font-bold">VIP会员</span>
                    <br />
                    <span className="text-[12px] text-[#999]">到期：{vipExpireDate}</span>
                  </>
                ) : (
                  <span className="text-[#555]">普通用户</span>
                )}
              </li>
              <li>
                <a href="/friends" className="block px-4 py-2 text-[#333] hover:bg-[#FFE5B4] hover:text-orange-500 transition-all">朋友</a>
              </li>
              <li>
                <a href="/settings" className="block px-4 py-2 text-[#333] hover:bg-[#FFE5B4] hover:text-orange-500 transition-all">设置</a>
              </li>
              <li>
                <a href="/contact" className="block px-4 py-2 text-[#333] hover:bg-[#FFE5B4] hover:text-orange-500 transition-all">联系我们</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
