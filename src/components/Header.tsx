import {
  faBolt,
  faUser,
  faCartShopping,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProduct"; 
import React from "react";

interface NavItem {
  icon: IconDefinition; // This is where you store FontAwesome icons
  text: string;
  route:string,
}

const navArray: NavItem[] = [
  { icon: faHouse, text: "Home" ,route:"/"},
  { icon: faBolt, text: "Sale",route:"/sale" },
  { icon: faUser, text: "Account",route:"/login" },
  { icon: faCartShopping, text: "Cart",route:"/cart" },
];

export default function Header() {
  return (
    <>
    <header>
      <Logo />
      <Search />
      <nav className="navlist">
        <ul className="navli">
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
      <Link to='/'>
      <h1>UrbanElite</h1>
      </Link>
    </div>
  );
}
function Search() {
  return (
    
    <div className="searchh">
      <input type="text" placeholder="Search Here" />
      <button>
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </button>
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
