import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Category Name</NavLink>
          </li>
          <li>
            <NavLink to="/">Category Name</NavLink>
          </li>
          <li>
            <NavLink to="/">Category Name</NavLink>
          </li>
          <li>
            <NavLink to="/">Category Name</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
