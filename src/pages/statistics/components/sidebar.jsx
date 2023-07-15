import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";
import { links } from "./links";
import { AiOutlineMenu } from "react-icons/ai";

export const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className={active ? "menu active" : "menu"}>
        <div className="menu__content">
          {!active ? (
            <>
              <div className="menu__header">
                <h4>Admin</h4>
                <button onClick={() => setActive(!active)}>
                  <AiOutlineMenu />
                </button>
              </div>
              {links.map((item) => (
                <div key={item.title} className="sideSection">
                  <p className="sideSectionTitle">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/statistics/${link.href}`}
                      key={link.name}
                      className="capitalize"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      <br />
                    </NavLink>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="menu__header">
                <h4></h4>
                <button onClick={() => setActive(!active)}>
                  <AiOutlineMenu />
                </button>
              </div>
              <ul>
                {links.map((item) => (
                  <div key={item.title} className="smallSideSection">
                    <p className="sideSectionTitle">{item.smallTitle}</p>
                    {item.links.map((link) => (
                      <NavLink
                        to={`/statistics/${link.href}`}
                        key={link.name}
                        className="smallSideMenu"
                      >
                        {link.icon}
                        <br />
                      </NavLink>
                    ))}
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};
