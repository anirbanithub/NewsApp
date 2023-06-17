import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LOKalNews
          </a>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/*
              lvmamyngnlnonzphplp
              trorsrusasesgsiskthtrtwuaveza */}

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ar">
                  Argentina
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/at">
                  Austria
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/au">
                  Australia
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/be">
                  Belgium
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/in">
                  India
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/us">
                  US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/br">
                  Brazil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cn">
                  China
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/id">
                  Indonesia
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/jp">
                  Japan
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/lt">
                  Italy
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/mx">
                  Maxico
                </Link>
              </li>
            </ul>

            {/* <Search/> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
