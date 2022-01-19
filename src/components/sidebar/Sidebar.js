import React from "react";
import { FaCog, FaGraduationCap, FaTachometerAlt, FaUser } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed top-16 left-0 h-screen w-16  flex-col bg-white drop-shadow-2xl rounded-r-lg">
      <Link to="/dashboard">
        <SideBarIcon icon={<FaTachometerAlt size="28" />} text="Dashboard" />
      </Link>

      <SideBarIcon icon={<FaUser size="28" />} text="Users" />
      <SideBarIcon icon={<FaGraduationCap size="28" />} text="Courses" />
      <SideBarIcon icon={<IoMdChatbubbles size="28" />} text="Forum" />

      <div className="flex items-center p-2 mt-52 space-x-4 justify-self-end">
        <SideBarIcon icon={<FaCog size="28" />} text="Parameters" />
      </div>

    </div>
  );
}

const SideBarIcon = ({ icon, text = "💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
