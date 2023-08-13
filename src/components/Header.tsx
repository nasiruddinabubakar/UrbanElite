import { faBolt,faUser,faCartShopping,faHouse,faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <h1>UrbanElite</h1>
      </div>
      <div className="searchh">
        <input type="text" placeholder="Search Here" />
        <button>
        <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
        </button>
      </div>
      <nav className="navlist">
        <ul className="navli">
        {/* <li>
            <div className="nav__div">
              <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
              <label>Search</label>
            </div>
          </li> */}
          <li>
            <div className="nav__div">
              <i>
                <FontAwesomeIcon icon={faHouse} />
              </i>
              <label>Home</label>
            </div>
          </li>
          <li>
            <div className="nav__div">
              <i>
                <FontAwesomeIcon icon={faBolt} />
              </i>
              <label>Sale</label>
            </div>
          </li>
          <li>
            <div className="nav__div">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <label>Account</label>
            </div>
          </li>
          <li>
            <div className="nav__div">
              <i>
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
              <label>Cart</label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
