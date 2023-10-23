import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navbar() {
  const abtUrl = {
    pathname: "/about",
    search: "?prodid=21&customername=tunji bello",
  };

  return (
    <div>
      <ul className="main-nav">
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to={abtUrl}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/post">
            Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
