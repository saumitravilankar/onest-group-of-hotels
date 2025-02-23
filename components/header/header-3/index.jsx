"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import HeaderSearch from "../HeaderSearch";
import MobileMenu from "../MobileMenu";
import { getStrapiMedia } from "@/utils/helpers";

const Header1 = ({ navbarData }) => {
  const { logo, cta, navigation_links } = navbarData;
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src={getStrapiMedia(logo?.image?.url)} alt={logo?.alt} />
                  <img src={getStrapiMedia(logo?.image?.url)} alt={logo?.alt} />
                </Link>
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu
                      navigationLinks={navigation_links}
                      style="text-dark-1"
                    />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <HeaderSearch />

                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <Link
                    href={cta?.href}
                    className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
                  >
                    {cta?.text}
                  </Link>
                </div>

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header1;
