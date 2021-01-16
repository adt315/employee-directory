import React from "react";

function User(props) {
  return (
    <tbody>
      <tr>
        <td className="align-middle">
          <img src={props.picture.thumbnail} alt="avatar-img" />
        </td>
        <td>{props.name.first + " " + props.name.last}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob.date}</td>
      </tr>
    </tbody>
  );
}

export default User;
