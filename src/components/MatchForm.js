import React from "react";
import DropDown from "./DropDown";
import "./css/MatchForm.css";

const MatchForm = ({ matchType, nextStep, handleChangeDropDown }) => {
  return (
    <div className="matchTypeContainer">
      <div>
        <DropDown
          name="matchType"
          select={matchType}
          title="Match Type"
          options={["Friendly", "Tournament"]}
          handleChangeDropDown={handleChangeDropDown}
        />
      </div>
      <div className="navigationButton">
        <button className="btn" onClick={(e) => nextStep()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MatchForm;
