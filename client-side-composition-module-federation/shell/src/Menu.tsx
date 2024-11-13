import './menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#">My Todo List</a>
        </li>
        <li>
          <a href="#">Favorite lists</a>
        </li>
        <li>
          <a href="#">Others Todo lists</a>
        </li>
      </ul>
      <ul className="right-align">
        <li>
          <a href="#">My Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
