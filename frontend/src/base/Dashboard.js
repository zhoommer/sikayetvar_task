import React from "react";
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

import Home from "../components/home/Home";

const Dashboard = () => {
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
            width={150}
            height={150}
            className="rounded-circle"
          />
        </div>

        <div className="user-info">
          <span className="fw-bold">Akif Fazil Guven</span>
        </div>

        <div className="user-position">Admin</div>

        <div className="links">
          <Button variant="outlined" startIcon={<MdOutlineHome />}>
            Home
          </Button>
          <Button variant="outlined" startIcon={<MdBookmarkBorder />}>
            Course
          </Button>
          <Button variant="outlined" startIcon={<MdOutlineSchool />}>
            Students
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
          <Home /> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
