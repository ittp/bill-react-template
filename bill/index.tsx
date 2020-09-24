import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-dom-router";
import styled from "styled-components";
import "./Index.scss";
class Page extends Component {
  defaultProps = {
    data: "123"
  };
  state = {
    model: "List",
    view: "21321321"
  };
  header = () => (
    <header id="header">
      <div>
        <div>Header</div>
        <div>Model header content</div>
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div>Navigation</div>
    </header>
  );
  render() {
    return (
      <div className="Page">
        <header id="header">Header</header>
        <div className="container">
          <div id="sidebar">Sidebar</div>
          <div id="content">Content</div>
          <div id="sidebar">Content</div>
        </div>
        <footer id="footer">Footer</footer>
      </div>
    );
  }
}
const template = {};

/* 


<section id="rows">
            <div className="row">
              <span>Row</span>
            </div>
            <div className="row">
              <span>Row</span>
            </div>
            <div className="row">
              <span>Row</span>
            </div>
            <div className="row">
              <span>Row</span>
            </div>
            <div className="row">
              <span>Row</span>
            </div>
            <div className="row">
              <span>Row</span>
            </div>
          </section>

Header (Fixed):

Left sidebar:
  - Logo
  - Search
  - Navigation

Content:
  Model Address:
  Address Title (Search / Selector): ул. Автовская, 32
  Title: ул. Уличная, 32
  Status: Достпуные услуги
  Table: Абоненты


Rifgt sidebar (1280)

Footer

*/
render(
  <Page {...template} data={template.data} />,
  document.getElementById("root")
);
