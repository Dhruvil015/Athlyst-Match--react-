import React, { Component } from "react";
import MatchForm from "./MatchForm";
import MatchDetailsForm from "./MatchDetailsForm";
import TeamDetailsForm from "./TeamDetailsForm";
import SubmitForm from "./SubmitForm";
import "./css/UserForm.css";
import moment from "moment";

export class UserForm extends Component {
  state = {
    step: 1,
    matchType: "",
    startDateAndTime: "",
    endDateAndTime: "",
    matchLocation: "",
    tournamentName: "",
    comments: "",
    team1Name: "",
    team2Name: "",
    team1HomeOrAway: "",
    team2HomeOrAway: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };

  handleChangeDropDown = (input, e) => {
    this.setState({ [input]: e.target.textContent });
  };

  dateFormate = (date) => {
    return moment(date).format("D/M/YYYY-hh:mm a").toUpperCase();
  };

  render() {
    const { step } = this.state;
    const {
      matchType,
      startDateAndTime,
      endDateAndTime,
      matchLocation,
      tournamentName,
      comments,
      team1Name,
      team2Name,
      team1HomeOrAway,
      team2HomeOrAway,
    } = this.state;
    const values = {
      matchType,
      startDateAndTime,
      endDateAndTime,
      matchLocation,
      tournamentName,
      comments,
      team1Name,
      team2Name,
      team1HomeOrAway,
      team2HomeOrAway,
    };
    switch (step) {
      case 1:
        return (
          <div className="container">
            <p className="title">Type {step}/3</p>
            <MatchForm
              matchType={matchType}
              nextStep={this.nextStep}
              handleChangeDropDown={this.handleChangeDropDown}
            />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <h5 className="title">General {step}/3</h5>
            <MatchDetailsForm
              matchType={matchType}
              startDateAndTime={startDateAndTime}
              endDateAndTime={endDateAndTime}
              matchLocation={matchLocation}
              tournamentName={tournamentName}
              comments={comments}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <p className="title">Team {step}/3</p>
            <TeamDetailsForm
              team1Name={team1Name}
              team2Name={team2Name}
              team1HomeOrAway={team1HomeOrAway}
              team2HomeOrAway={team2HomeOrAway}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              handleChangeDropDown={this.handleChangeDropDown}
            />
          </div>
        );
      case 4:
        return <SubmitForm values={values} dateFormate={this.dateFormate} />;
    }
  }
}

export default UserForm;
