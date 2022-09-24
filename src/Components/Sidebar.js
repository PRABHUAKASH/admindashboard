import React, { useState } from "react";
import { Collapse } from "bootstrap";
import { Link } from "react-router-dom";
import UnDrawrocket from "../img/undraw_rocket.svg";

function SideBar() {
  const [toggleComponents, setToggleComponents] = useState(false);
  const [toggleUtilities, setToggleUtilities] = useState(false);
  const [togglePages, setTogglePages] = useState(false);

  const handleCollapseComponent = () => {
    setToggleComponents(!toggleComponents);
    var myCollapse = document.getElementById("collapseComponents");
    var bsCollapse = new Collapse(myCollapse);
    toggleComponents ? bsCollapse.show() : bsCollapse.hide();
  };

  const handleCollapseUtilities = () => {
    setToggleUtilities(!toggleUtilities);
    var myCollapse = document.getElementById("collapseUtilities");
    var bsCollapse = new Collapse(myCollapse);
    toggleUtilities ? bsCollapse.show() : bsCollapse.hide();
  };

  const handleCollapsePages = () => {
    setTogglePages(!togglePages);
    var myCollapse = document.getElementById("collapsePages");
    var bsCollapse = new Collapse(myCollapse);
    togglePages ? bsCollapse.show() : bsCollapse.hide();
  };

  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li class="nav-item active">
        <Link class="nav-link" to="/dashboard">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          onClick={handleCollapseComponent}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseComponents"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <Link class="collapse-item" to="/button">
              Buttons
            </Link>
            <Link class="collapse-item" to="/card">
              Cards
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          onClick={handleCollapseUtilities}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <Link class="collapse-item" to="/colors">
              Colors
            </Link>
            <Link class="collapse-item" to="/borders">
              Borders
            </Link>
            <Link class="collapse-item" to="/animation">
              Animations
            </Link>
            <Link class="collapse-item" to="/other">
              Other
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          onClick={handleCollapsePages}
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          class="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <Link class="collapse-item" to="/">
              Login
            </Link>
            <Link class="collapse-item" to="/register">
              Register
            </Link>
            <Link class="collapse-item" to="/forgetpassword">
              Forgot Password
            </Link>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <Link class="collapse-item" to="/error">
              404 Page
            </Link>
            <Link class="collapse-item" to="/blank">
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li class="nav-item">
        <Link class="nav-link" to="/charts">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li class="nav-item">
        <Link class="nav-link" to="/table">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      <div class="sidebar-card d-none d-lg-flex">
        <img
          class="sidebar-card-illustration mb-2"
          src={UnDrawrocket}
          alt="..."
        />
        <p class="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          class="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}

export default SideBar;