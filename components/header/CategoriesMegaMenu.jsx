import Image from "next/image";
import Link from "next/link";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getStrapiMedia } from "@/utils/helpers";

const CategoriesMegaMenu = ({ setIsActiveParent, megaMenu }) => {
  const pathname = usePathname();
  const { headers, mega_menus } = megaMenu;
  const [activeNestedMenu, setActiveNestedMenu] = useState(0);

  const headersTitles = useMemo(() => {
    if (headers.length) {
      return headers.map((header) => header.title);
    }
    return [];
  }, [headers]);

  const currentMegaMenu = useMemo(() => {
    return mega_menus[activeNestedMenu];
  }, [mega_menus, activeNestedMenu]);

  useEffect(() => {
    mega_menus?.map((mega_menu) => {
      mega_menu?.menu_items?.map((item) => {
        item?.menu_list?.map((list) => {
          if (list.routePath?.split("/")[2] == pathname.split("/")[1]) {
            setIsActiveParent(true);
            setActiveNestedMenu(megaMenu.id - 1);
          }
        });
      });
    });
  }, []);

  return (
    <div className="tabs -underline-2 js-tabs">
      <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
        {headersTitles.map(
          (item, i) =>
            !!mega_menus[i] && (
              <div
                className="col-auto"
                key={i}
                onClick={() => setActiveNestedMenu(i)}
              >
                <button
                  className={`tabs__button text-light-1 fw-500 js-tabs-button ${
                    activeNestedMenu == i
                      ? "nested-menu-active"
                      : "nested-menu-inactive"
                  } `}
                >
                  {item}
                </button>
              </div>
            )
        )}
      </div>
      {/* End tab-controls */}

      <div className="tabs__content js-tabs-content">
        <div className={"react-tabs__tab-panel--selected"}>
          <ul className="mega__content">
            <li className="mega__grid">
              {currentMegaMenu?.menu_items?.map((item) => (
                <div className="mega__item" key={item.id}>
                  <div className="mega__title text-15 fw-500">{item.title}</div>
                  <div className="y-gap-5 text-15 pt-5">
                    {item?.menu_list?.map((list, i) => (
                      <div
                        key={i}
                        className={
                          isActiveLink(list.routePath, pathname)
                            ? "current"
                            : ""
                        }
                      >
                        <Link href={list.routePath}>{list.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </li>

            {currentMegaMenu?.special_item !== null && (
              <li className="mega__image d-flex relative">
                <Image
                  width={270}
                  height={300}
                  src={getStrapiMedia(
                    currentMegaMenu?.special_item?.banner?.image?.url
                  )}
                  alt={currentMegaMenu?.special_item?.banner?.alt}
                  className="rounded-4 js-lazy"
                />

                <div className="absolute w-full h-full px-30 py-24 z-2">
                  <div className="text-22 fw-500 lh-15 text-white">
                    {currentMegaMenu?.special_item?.title}
                  </div>
                  <Link
                    href={currentMegaMenu?.special_item?.cta?.href}
                    className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                  >
                    {currentMegaMenu?.special_item?.cta?.text}
                  </Link>
                </div>

                <div className="mega-banner-overlay" />
              </li>
            )}
            {/* End mega menu right images */}
          </ul>
          {/* ))} */}
        </div>
      </div>
      {/* End tab_content */}
    </div>
  );
};

export default CategoriesMegaMenu;
