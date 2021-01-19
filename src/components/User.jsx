import React from "react";

function User(props) {
  return (
    <tbody>
      <tr>
        <td className="flex-container avatar">
          <img src={props.picture.thumbnail} alt="avatar-img" />
        </td>
        <td className="flex-container">{props.name.first + " " + props.name.last}</td>
        <td className="flex-container">{props.phone}</td>
        <td className="flex-container">{props.email}</td>
        <td className="flex-container">{props.dob.date}</td>
      </tr>
    </tbody>
  );
}

export default User;
