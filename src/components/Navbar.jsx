import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    let { mode, toggleMode } = this.props;
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-dark bg-body-tertiary`} data-bs-theme={mode}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Newsdose 24*7
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to = "/entertainment"
                        className="dropdown-item"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link to = "/sports"
                        className="dropdown-item"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="form-check form-switch mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
                <label
                  className={`form-check-label text-${mode === "dark" ? 'light' : 'dark'}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
