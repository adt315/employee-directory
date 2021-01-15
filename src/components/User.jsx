import React from "react";

function User(props) {
    return (
        <div>
            <img
                src={props.picture.thumbnail}
                alt="avatar-img"
            />
            <p>{props.name.first + " " + props.name.last}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.dob.date}</p>
        </div>
    );
}

export default User;