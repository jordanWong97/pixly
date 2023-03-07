import { NavLink } from "react-router-dom";

/** Nav component
 *
 * Renders navbar link to home and other links
 *
 * Props:
 *
 * App --> Nav
 *
 */

function Nav() {

  return (
    <nav>
      <div className="nav-item navbar-brand">
        <NavLink className="nav-link navbrand" to="/">Pixly</NavLink>
      </div>
      <div>
        <NavLink className="nav-link" to="">Upload new image</NavLink>
        {/* <NavLink className="nav-link" to=""></NavLink> */}
      </div>
    </nav>
  );
}

export default Nav;