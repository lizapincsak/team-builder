import './App.css';
import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import Team from './components/Team';

// const teamMembers = [
//   {name: 'Jamie Tartt', email: 'l@w.com', role: 'forward'},
//   {name: 'Roy Kent', email: 'z@w.com', role: 'defense'},
//   {name: 'Ted Lasso', email: 'p@w.com', role: 'coach'},
// ]

const intialTeamValues = {
  names: "",
  email: "",
  role: "",
}

function App() {
const [team, setTeam] = useState([]);
const [formValues, setFormValues] = useState(intialTeamValues);
const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue })
}
const submitForm = (evt) => {
  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  };
  if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;
  setTeam(team.concat(newTeamMember));
  setFormValues(intialTeamValues);
};
  return (
    <div className="container">
      <h1>Team Roster</h1>
      <TeamForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {team.map((player) => {
        return <Team key={player.id}
            details={player}
            />
      })}
      </div>
      );
}

export default App;
