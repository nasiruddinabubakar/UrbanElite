import {
  faWarehouse,
  faUser,
  faCartShopping,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProduct";
import HeroSection from './HeroSection'
import React, { ChangeEvent, useEffect, useState } from "react";

interface NavItem {
  icon: IconDefinition; // This is where you store FontAwesome icons
  text: string;
  route: string;
}
const searchIconPropertie: NavItem = {
  icon: faSearch,
  text: "Home",
  route: "/",
};
const navArray: NavItem[] = [
  { icon: faHouse, text: "Home", route: "/" },
  { icon: faWarehouse, text: "Articles", route: "/sale" },
  { icon: faUser, text: "Account", route: "/login" },
  { icon: faCartShopping, text: "Cart", route: "/cart" },
];

export default function Header() {
  const [showIcon, setShowSearchIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // Update the window width when the window is resized

      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 830 && !showIcon) {
    setShowSearchIcon(true);
  }

  if (windowWidth > 830 && showIcon) {
    setShowSearchIcon(false);
  }

  return (
    <>
      <header>
        <Logo />
        {!showIcon && <Search />}
        <nav className="navlist">
          <ul className="navli">
            {showIcon && (
              <li>
                <div className="nav__div">
                  <i>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                  <label>Search</label>
                </div>
              </li>
            )}
            {navArray.map((item) => (
              <ListComponents item={item} />
            ))}
          </ul>
        </nav>
      </header>
     
    </>
  );
}
function Logo() {
  return (
    <div>
      <Link to="/">
        <h1>UrbanElite</h1>
      </Link>
    </div>
  );
}
function Search() {
  const [searchStatus, setSearchStatus] = useState(false);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setSearchStatus((searchStatus) => !searchStatus);
      return;
    }
    setSearchStatus(true);
  }

  return (
    <div
      style={searchStatus ? { borderRadius: " 1.5rem 1.5rem 0rem 0rem" } : {}}
      className="searchh"
    >
      <input type="text" placeholder="Search Here" onChange={handleSearch} />
      <button>
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </button>
      {searchStatus && (
        <div className="dropdownsearch">
          <ul style={{ fontSize: "14px", fontWeight: 400 }}>
            <li style={{ paddingTop: "4px" }}>this is a search</li>
            <li style={{ paddingTop: "4px" }}>this is a search</li>
            <li style={{ paddingTop: "4px" }}>this is a search</li>
            <li style={{ paddingTop: "4px" }}>this is a search</li>
            <li style={{ paddingTop: "4px" }}>this is a search</li>
          </ul>
        </div>
      )}
    </div>
  );
}
interface Nav {
  item: NavItem;
}
export function ListComponents({ item }: Nav) {
  return (
    <li>
      <Link to={item.route}>
        <div className="nav__div">
          <i>
            <FontAwesomeIcon icon={item.icon} />
          </i>
          <label>{item.text}</label>
        </div>
      </Link>
    </li>
  );
}
