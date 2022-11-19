import React from "react";
import ListItem from "./ListItem";

export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.titulo} </h2>
        <p>{props.subtitulo} </p>
        <ul class={props.class}>
          {props.listitem.map((item) => (
            <ListItem
              href={item.href}
              name={item.name}
              img={item.img}
              width={props.width}
              height={props.height}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
