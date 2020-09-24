import * as React from "react";
import { Router, Switch, NavLink, Route } from "react-router-dom";

function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

export default function List(data: any) {
  const datas = [
    {
      item: "Home",
      link: "/"
    },
    {
      item: "Account",
      link: "/account"
    }
  ];

  const div = (t, i) => (
    <a href={t.link} key={i}>
      {t.item}
    </a>
  );
  const nl = (t, i) => <div>1</div>;
  const items = (data) => data.map((item, index) => nl(item, index));
  return 1;
}
