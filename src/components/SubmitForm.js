import React from "react";
import "./css/SubmitForm.css";

const SubmitForm = ({ values, dateFormate }) => {
  const checkValue = (val) => {
    if (val) {
      return val;
    } else {
      return "-";
    }
  };
  return (
    <table>
      <tr>
        <th>Team 1</th>
        <th>Team 2</th>
        <th>Match Type</th>
        <th>Tournament Name</th>
        <th>Start Date & Time</th>
        <th>End Date & Time</th>
        <th>Location</th>
        <th>comments</th>
      </tr>
      <tr>
        <td>
          {checkValue(values.team1Name)} ({checkValue(values.team1HomeOrAway)})
        </td>
        <td>
          {checkValue(values.team2Name)} ({checkValue(values.team2HomeOrAway)})
        </td>
        <td>{checkValue(values.matchType)}</td>
        <td>{checkValue(values.tournamentName)}</td>
        <td>
          {checkValue(values.startDateAndTime) !== "-"
            ? dateFormate(values.startDateAndTime)
            : "-"}
        </td>
        <td>
          {checkValue(values.endDateAndTime) !== "-"
            ? dateFormate(values.endDateAndTime)
            : "-"}
        </td>
        <td>{checkValue(values.matchLocation)}</td>
        <td>
          <div className="comments">{checkValue(values.comments)}</div>
        </td>
      </tr>
    </table>
  );
};

export default SubmitForm;
