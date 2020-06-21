import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <nav class="bg-light border-right sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <span data-feather="home"></span>
                <i className="fa fa-clock-o"></i> Timer{" "}
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file1"></span>
                <i className="fa fa-bar-chart"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
