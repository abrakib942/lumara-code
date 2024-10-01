/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const LeftMenu = ({ mode }) => {
  const items = [
    { key: "Home", label: "Home", link: "/" },
    { key: "Projects", label: "Projects", link: "/home" },
    { key: "Services", label: "Services", link: "/home" },
  ];

  return (
    <div
      className={`${
        mode === "horizontal" ? "flex-row gap-8" : "flex-col ml-8"
      } flex  leading-9 text-[16px] font-sans `}
    >
      {items.map((item) => (
        <div key={item.key}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "no-underline text-[#3B52CF]"
                : "text-[#6B708D] no-underline"
            }
            to={item.link}
          >
            {item.label}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LeftMenu;
