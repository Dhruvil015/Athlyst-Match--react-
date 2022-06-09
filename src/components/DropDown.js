import React, { useState } from "react";
import "./css/DropDown.css";
import FeatherIcon from "feather-icons-react";

const DropDown = ({ name, select, title, options, handleChangeDropDown }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>
        <span
          className={
            select === "" ? "defaultTitle" : "changeTextColor defaultTitle"
          }
        >
          {select || title}
        </span>
        <FeatherIcon icon="chevron-down" size="22" color="rgb(167, 167, 167)" />
      </div>
      {isActive && (
        <div className="dropdown_content">
          {options.map((option) => {
            return (
              <div
                key={option}
                className="dropdown_item"
                onClick={(e) => {
                  handleChangeDropDown(name, e);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
