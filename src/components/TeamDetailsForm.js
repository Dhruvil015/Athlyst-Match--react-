import React from "react";
import DropDown from "./DropDown";
import "./css/TeamDetailsForm.css";

const TeamDetailsForm = ({
  team1Name,
  team2Name,
  team1HomeOrAway,
  team2HomeOrAway,
  nextStep,
  previousStep,
  handleChange,
  handleChangeDropDown,
}) => {
  return (
    <>
      <div className="teamDetailsContainer">
        <div className="team1Container">
          <input
            type="text"
            placeholder="Team 1 Name"
            value={team1Name}
            onChange={(e) => handleChange("team1Name", e.target.value)}
          />
          <div>
            <DropDown
              name="team1HomeOrAway"
              select={team1HomeOrAway}
              title="Home or Away"
              options={["Home", "Away"]}
              handleChangeDropDown={handleChangeDropDown}
            />
          </div>
        </div>
        <h4>
          <span>VS</span>
        </h4>
        <div className="team2Container">
          <input
            type="text"
            placeholder="Team 2 Name"
            value={team2Name}
            onChange={(e) => handleChange("team2Name", e.target.value)}
          />
          <DropDown
            name="team2HomeOrAway"
            select={team2HomeOrAway}
            title="Home or Away"
            options={["Home", "Away"]}
            handleChangeDropDown={handleChangeDropDown}
          />
        </div>
      </div>
      <div className="navigationButton">
        <button className="btn previousBtn" onClick={(e) => previousStep()}>
          Back
        </button>
        <button className="btn" onClick={(e) => nextStep()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default TeamDetailsForm;
