import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <div>
      <div className="navbars">
        <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left__img">
            <img
              src="https://preview.colorlib.com/theme/manup/img/logo.png"
              alt=""
            />
          </div>
          <ul>
            <li>
              <Link id="link" to="">HOME</Link>
            </li>
            <li>
              <Link id="link" to="add">Add</Link>
            </li>
           
          </ul>
        </div>

<div className="navbar__right">
    <div className="icon1">
<Link to='wishlist'><FavoriteBorderIcon/></Link>
    </div>
    <div className="icon2">
        <Link><ShoppingCartIcon/></Link>
    </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Header;
