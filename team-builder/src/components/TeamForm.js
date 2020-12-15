import React from 'react';

function TeamForm ({ values, update, add }) {
    const change = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const submit = (evt) => {
        evt.preventDefault();
        add();
    };
    return(
        <form onSubmit={submit}>
          <label>Name
            <input
            name="name"
            type="text"
            value={values.name}
            onChange={change}
            maxLength="30"
            placeholder="Type a name..."
            />
            </label>
            <label>Email
            <input
            name="email"
            type="email"
            value={values.email}
            onChange={change}
            maxLength="30"
            placeholder="Type an email..."
            />
            </label>
            <label>Role
            <select 
            name="role"
            value={values.role}
            onChange={change}>
            <option value="">-----select role-----</option>
            <option value="Goalie">Goalie</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
            </select>
        </label>
        <div>
          <button>add</button>
        </div>
      </form>

  );
    };

export default TeamForm;