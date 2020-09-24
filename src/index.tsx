import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DataTable from "react-data-table-component";
import "./styles.scss";

class Template {
  section(section: any) {
    const Address = "Address";
    return items;
  }
  getAddress(object: string) {
    return object;
  }
}

class Page extends Component {
  static defaultProps = {
    address: ["улица Автовская", 32, "A"]
  };
  address = this.props.address;
  addressR = (
    <div>
      {this.address[0]}, д. {this.address[1]}
    </div>
  );
  state = {
    view: "Дом",
    data: this.addressR
  };
  render() {
    const pageProps = {
      style: {
        display: "flex",
        height: "100vh"
      }
    };
    return (
      <div id="page" {...pageProps}>
        <section className="heading">
          <h3 className="title">Address</h3>

          {this.state.data}
        </section>

        <section id="sidebar">
          Sidebar: Model(Address, Consumer, Tarrifs)
          <h3>History</h3>
          <h3>Calendar</h3>
          <h3>Chat / Wiki</h3>
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<Page />, rootElement);
