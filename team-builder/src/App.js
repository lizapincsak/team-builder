import './App.css';
import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
// import Team from './components/Team';

// const teamMembers = [
//   {name: 'Jamie Tartt', email: 'l@w.com', role: 'forward'},
//   {name: 'Roy Kent', email: 'z@w.com', role: 'defense'},
//   {name: 'Ted Lasso', email: 'p@w.com', role: 'coach'},
// ]

const emptyForm = {
  names: "",
  email: "",
  role: "",
}

function App() {
const [team, setTeam] = useState([]);
const [formValues, setFormValues] = useState(emptyForm);
const updateForm = (inputName, inputValue) => {
  setFormValues({ ...formValues, [inputName]: inputValue })
}
const addToTeam = (evt) => {
  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  };
  if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;
  setTeam(team.concat(newTeamMember));
  setFormValues(emptyForm);
};
  return (
    <div className="container">
      <h1>Team Roster</h1>
      <TeamForm 
      values={formValues}
      update={updateForm}
      add={addToTeam}
      />
      {team.map((player, idx) => {
        return (
        <div key={idx} >
          <h2>{player.name}</h2>
          <h4>{player.email}</h4>
          <h4>{player.role}</h4>
            </div>
        );
      })}
      </div>
      );
}

export default App;
