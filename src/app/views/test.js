'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/test.css";

export function Navbar({ sidebarOpen, toggleSidebar }) {
  return (
    <header className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <h1>Menghan Studio</h1>
    </header>
  );
}

export function Sidebar({ sidebarOpen }) {
  return (
      <div>
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav>
      <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
    </nav>
  );
}
