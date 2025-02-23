import Link from "next/link";
import { homeItems } from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const RenderNavLink = ({
  navLink,
  pathname,
  isActiveParent,
  setIsActiveParent,
}) => {
  const { dropdown_title, dropdown_links, mega_menu, page_link } = navLink;

  // Render normal dropdown
  if (dropdown_title !== null && mega_menu === null && page_link === null) {
    return (
      <li
        className={`${
          isActiveParentChaild(dropdown_links, pathname) ? "current" : ""
        } menu-item-has-children`}
      >
        <a href="#">
          <span className="mr-10">{dropdown_title}</span>
          <i className="icon icon-chevron-sm-down" />
        </a>
        <ul className="subnav">
          {dropdown_links?.map((menu, i) => (
            <li
              key={i}
              className={isActiveLink(menu?.href, pathname) ? "current" : ""}
            >
              <Link href={menu?.href}>{menu?.text}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  if (dropdown_links.length === 0 && mega_menu !== null && page_link === null) {
    return (
      <li
        className={
          isActiveParent
            ? "menu-item-has-children -has-mega-menu current"
            : "menu-item-has-children -has-mega-menu"
        }
      >
        <a href="#">
          <span className="mr-10">{dropdown_title}</span>
          <i className="icon icon-chevron-sm-down" />
        </a>
        <div className="mega">
          <CategoriesMegaMenu
            megaMenu={mega_menu}
            setIsActiveParent={setIsActiveParent}
          />
        </div>
      </li>
    );
  }

  if (dropdown_links.length === 0 && mega_menu === null && page_link !== null) {
    return (
      <li className={pathname === page_link?.href ? "current" : ""}>
        <Link href={page_link?.href}>{dropdown_title || page_link?.text}</Link>
      </li>
    );
  }
};

const MainMenu = ({ style = "", navigationLinks }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {navigationLinks?.map((navLink) => (
          <RenderNavLink
            key={navLink.id}
            navLink={navLink}
            pathname={pathname}
            isActiveParent={isActiveParent}
            setIsActiveParent={setIsActiveParent}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
