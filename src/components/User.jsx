import React from "react";

function User(props) {
    return (
        <div>
            <img
                src={props.img}
                alt="avatar-img"
            />
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.birthday}</p>
        </div>
    );
}

export default User;