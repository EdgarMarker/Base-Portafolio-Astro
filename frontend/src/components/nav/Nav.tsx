import React, { useState } from "react";
import "../../styles/nav.css";
import CustomImg from "../ui/img/CustomImg";
import { dataLink } from "./dataLinks";
import type { Company } from "../../_types/company.types";

const Nav = ({ data }: { data: Company }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden"; // Prevenir scroll cuando menú está abierto
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = ""; // Restaurar scroll
  };

  return (
    <header id="header">
      {/* Navegación Desktop */}
      <nav className="desktop">
        <a href="/">
          <CustomImg
            src={data.general.img_logoNav.media.url}
            alt={data.general.img_logoNav.alt?.altText || ""}
            width={180}
            height={60}
            quality={70}
            category="custom"
          />
        </a>
        <ul role="list">
          {dataLink.map((data, index) => (
            <li key={index}>
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
        <a className="btn">Llamar</a>
      </nav>

      {/* Navegación Mobile (Vista cerrada) */}
      <nav className="mobile">
        <div className="mobile__head">
          <CustomImg
            src={data.general.img_logoNav.media.url}
            alt={data.general.img_logoNav.alt?.altText || ""}
            width={120}
            height={40}
            quality={70}
            category="custom"
          />
          <button
            onClick={openMenu}
            className="menu-btn open-menu"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Navegación Mobile (Vista abierta) */}
      <nav className={`mobileActive ${isMenuOpen ? "is-active" : ""}`}>
        <div className="mobile__head">
          <CustomImg
            src={data.general.img_logoNav.media.url}
            alt={data.general.img_logoNav.alt?.altText || ""}
            width={120}
            height={40}
            quality={70}
            category="custom"
          />
          <button
            onClick={closeMenu}
            className="menu-btn close-menu"
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul role="list">
          {dataLink.map((data, index) => (
            <li key={index}>
              <a href={data.link} onClick={closeMenu}>
                {data.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="btn">Llamar</div>
      </nav>
    </header>
  );
};

export default Nav;
