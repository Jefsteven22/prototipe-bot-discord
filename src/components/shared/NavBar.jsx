import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if (menu) {
      setMenu(!menu);
    } else {
      setMenu(true);
    }
  };

  return (
    <nav className="navBar">
      <ul className="navBar__container">
        <li>
          <Link to="/">
            <img className="navBar__logo" src="/logo.jpg" alt="logo bot" />
          </Link>
        </li>
        <li className="navBar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navBar__item">Legals</li>
        <li className="navBar__item">Support</li>
        <li className="navBar__item">Guide</li>
      </ul>
      <div className="navBar__btns">
        <button onClick={handleMenu} className="navBar__btn">
          Panel
        </button>
        <ul className={menu ? "navBar__menu" : "navBar__menu off"}>
          <li className="navBar__menu-item">
            <Link to="/servers">Servers</Link>
          </li>
          <li className="navBar__menu-item">Settings</li>
          <li className="navBar__menu-item">Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
