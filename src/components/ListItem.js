import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <a target="_blank" href={props.href}>
        <img
          src={props.name}
          alt={props.img}
          width={props.width}
          height={props.height}
        />
      </a>
    </li>
  );
};
export default ListItem;
