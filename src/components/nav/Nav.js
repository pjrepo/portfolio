import React, { useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

const items = [
  { i: 1, page: "#", icon: <AiOutlineHome /> },
  { i: 2, page: "#about", icon: <AiOutlineUser /> },
  { i: 3, page: "#experience", icon: <BiBook /> },
  { i: 4, page: "#portfolio", icon: <AiOutlineFundProjectionScreen /> },
  { i: 5, page: "#contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {items.map((item) => {
        const { i, page, icon } = item;
        return (
          <a
            key={i}
            href={page}
            onClick={() => setActiveNav(page)}
            className={activeNav === page ? "active" : ""}
          >
            {icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
