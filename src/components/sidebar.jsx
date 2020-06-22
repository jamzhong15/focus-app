import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <nav className="bg-light border-right sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span data-feather="home"></span>
                <i className="fa fa-clock-o"></i> Timer{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file1"></span>
                <i className="fa fa-bar-chart"></i> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file2"></span>
                <i className="fa fa-info-circle"></i> About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;
