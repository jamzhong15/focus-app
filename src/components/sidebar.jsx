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
                Timer <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;
