import React, { useEffect } from "react";
import user from "../assets/images/user.jpg";
import "./dashboard.css";
// import { FaHome, FaBookmark, FaGraduationCap, FaMoneyCheckAlt, FaClipboardList, FaScrewdriver } from "react-icons/fa";
import {
  MdOutlineHome,
  MdBookmarkBorder,
  MdOutlineSchool,
  MdAttachMoney,
  MdOutlineReportGmailerrorred,
  MdOutlineSettingsSuggest,
  MdLogout,
  MdNavigateBefore,
  MdOutlineDoorbell
} from "react-icons/md";
import { Button } from "@mui/material";
import { Routes, Route, Link } from 'react-router-dom';

import Home from "../components/home/Home";
import Students from '../components/students/Students';

const Dashboard = () => {

  useEffect = () => {
    const path = window.location.pathname.split("/");
    if (path[1] === "students") {
    }
  }

  const students = () => {
    window.location.href = "/students";
  }

  const home = () => {
    window.location.href = "/home";
  }
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="brand">
          <span className="vl"></span>
          <span> MANAGE COURSES</span>
        </div>

        <div className="user-profile">
          <img
            src={user}
            alt="user"
            width={100}
            height={100}
            className="rounded-circle"
          />
        </div>

        <div className="user-info">
          <span className="fw-bold">Akif Fazil Guven</span>
        </div>

        <div className="user-position">Admin</div>

        <div className="links">
          <Button variant="outlined" startIcon={<MdOutlineHome />} id="home" className="active">
            <Link to={'/home'} className="text-dark text-decoration-none fw-bold">Home</Link>
          </Button>
          <Button variant="outlined" startIcon={<MdBookmarkBorder />}>
            Course
          </Button>
          <Button variant="outlined" startIcon={<MdOutlineSchool />} id="students" className="student">
            <Link to={'/students'} className="text-dark text-decoration-none fw-bold">Students</Link>
          </Button>
          <Button variant="outlined" startIcon={<MdAttachMoney />}>
            Payment
          </Button>
          <Button variant="outlined" startIcon={<MdOutlineReportGmailerrorred />}>
            Report
          </Button>
          <Button variant="outlined" startIcon={<MdOutlineSettingsSuggest />}>
            Settings
          </Button>
          <Button variant="outlined" startIcon={<MdLogout />}>
            Logout
          </Button>
        </div>
      </div>

      <div className="main">
        <div className="main-header">
          <div>
            <MdNavigateBefore className="main-header-icon"/>
          </div>

          <div>
            <MdOutlineDoorbell className="main-header-icon"/>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/students" element={<Students />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
