import React from 'react';

const TeamForm = props => {

    const { values, update, submit } = props;

    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return(
        <form onSubmit={onSubmit}>
        <div>
          <label>Name
            <input
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            maxLength="30"
            placeholder="Type a name..."
            />
            </label>
            <label>Email
            <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            maxLength="30"
            placeholder="Type an email..."
            />
            </label>
            <label>Role
            <select 
            name="role"
            value={values.role}
            onChange={onChange}>
            <option value="">-----select role-----</option>
            <option value="">Goalie</option>
            <option value="">Defender</option>
            <option value="">Midfielder</option>
            <option value="">Forward</option>
            </select>
        </label>
        <div>
          <button className="submit">submit</button>
        </div>
        </div>
      </form>

  );
    };

export default TeamForm;