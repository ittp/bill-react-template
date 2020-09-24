const navItems = ["Home", "Account View", "Address View", "Deals View"];

const data = [
  {
    item: "sidebar",
    style: {
      class: "sidebar",
      width: "20vw"
    },
    nav: navItems
  }
];
class Template {
  content(items: any) {
    return items;
  }
  nav(links: any) {
    return links.map((item, index) => {
      return (
        <a className="NavLink" key={index} href={item.location}>
          {item.link}
        </a>
      );
    });
  }
  list(items: any) {
    return items.map((item, index) => {
      console.log({ index: item });
      return (
        <div className="row {item.item}" style={item.style} key={index}></div>
      );
    });
  }
}

import spb from "./data/spb";
import spbD from "./data/district";
// import App from "./App";
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }

const custom = [];

const ctrl = [
  { id: 1, title: "ВЦКП", controller: 1 },
  { id: 2, title: "ТСЖ", controller: 2 }
];
const district = [{ id: 1, title: "Кировский район" }];
const street = [
  {
    district: 1,
    id: 1,
    type: "улица",
    title: "Автовская",
    houses: [11, 12, 33, 44]
  }
];

const house = [
  {
    street: [1, 1],
    id: 1,
    district: 1,
    consumers: 0
  }
];

const dataT = [
  { id: 1, controller: "ВЦКП", title: "Будь в курсе", cost: 500 },
  { id: 2, controller: "ВЦКП", title: "Хочу Интернет", cost: 450 }
];

function Summary(o: any) {
  const district = o.district;
  console.log(o);
}

const summary = { district, street, house, dataT };

Summary(summary);
const columns = [
  {
    name: "Управляющий",
    selector: "controller",
    sortable: true
  },
  {
    name: "Тариф",
    selector: "title",
    sortable: true
  },
  {
    name: "Стоимость",
    selector: "cost",
    sortable: true,
    right: true
  }
];

class MyComponent extends Component {
  render() {
    return <DataTable title="Тарифы" columns={columns} data={dataT} />;
  }
}
const streetColumns = [
  {
    name: "Управляющий",
    selector: "controller",
    sortable: true
  },
  {
    name: "Тариф",
    selector: "title",
    sortable: true
  },
  {
    name: "Стоимость",
    selector: "cost",
    sortable: true,
    right: true
  }
];
console.log(spbD);

class TableStreets extends Component {
  render() {
    return <DataTable title="Адрес" columns={columns} data={dataT} />;
  }
}

function Rendering() {
  return (
    <div className="Container">
      <div className="row" id="sidebar">
        <div className="address">
          <div>Автовская улица, 32</div>
        </div>
        <div className="status">
          <span>К</span>
          <span>Ц</span>
          <span>И</span>
        </div>
      </div>
    </div>
  );
}
