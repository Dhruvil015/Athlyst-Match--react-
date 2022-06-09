import React from "react";
import "./css/MatchDetailsForm.css";

const MatchDetailsForm = ({
  matchType,
  startDateAndTime,
  endDateAndTime,
  matchLocation,
  tournamentName,
  comments,
  nextStep,
  previousStep,
  handleChange,
}) => {
  return (
    <>
      <div className="allFieldsContainer">
        <div className="leftFieldsContainer">
          <input
            className="dateInput"
            type="text"
            placeholder="Start Date & Time"
            value={startDateAndTime}
            onChange={(e) => handleChange("startDateAndTime", e.target.value)}
            onFocus={(e) => (e.target.type = "datetime-local")}
            max={endDateAndTime}
          />
          <input
            type="text"
            placeholder="Match Location"
            value={matchLocation}
            onChange={(e) => handleChange("matchLocation", e.target.value)}
          />
          {matchType === "Tournament" ? (
            <input
              type="text"
              placeholder="Tournament Name"
              value={tournamentName}
              onChange={(e) => handleChange("tournamentName", e.target.value)}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="rightFieldsContainer">
          <input
            className="dateInput"
            type="text"
            placeholder="End Date & Time"
            value={endDateAndTime}
            onChange={(e) => handleChange("endDateAndTime", e.target.value)}
            onFocus={(e) => (e.target.type = "datetime-local")}
            min={startDateAndTime}
          />
          <textarea
            placeholder="Comments"
            value={comments}
            onChange={(e) => handleChange("comments", e.target.value)}
          />
        </div>
      </div>
      <div className="navigationButton">
        <button className="btn previousBtn" onClick={(e) => previousStep()}>
          Back
        </button>
        <button className="btn" onClick={(e) => nextStep()}>
          Next
        </button>
      </div>
    </>
  );
};

export default MatchDetailsForm;
