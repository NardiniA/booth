import React from 'react';
import menus from "@/config/menus.json";
import NavLink from './NavLink';

const Nav: React.FC<{ handleClick: any }> = ({ handleClick }) => {
  return (
    <nav className="s-header__nav">
        <ul>
            {menus?.mainMenu && menus?.mainMenu?.map((link, index) => (
                <NavLink link={link} handleClick={handleClick} key={link?.text + index} />
            ))}
        </ul>
    </nav>
  )
}

export default Nav