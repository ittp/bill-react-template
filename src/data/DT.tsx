import React, { useState } from "react";
import { render } from "react-dom";

import { storiesOf } from "@storybook/react";
import { orderBy } from "lodash";
// import data from "./exampleData";
import data from "./spb";
// import data from "https://raw.githubusercontent.com/jbetancur/react-data-table-component/master/stories/DataTable/constants/sampleMovieData.js";
import DataTable from "react-data-table-component";

const data2 = (items: any) => {
  console.log(data.districts);
};

data2(data);

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Street",
    selector: "streets.title",
    sortable: true
  },
  {
    name: "Districs",
    selector: "district",
    sortable: true
  },
  {
    name: "Value",
    selector: "value",
    sortable: true
  }
];

const SortingServerSide = () => {
  const [loading, setLoading] = useState(false);
  const [items, setData] = useState(data);

  const handleSort = (column: any, sortDirection: any) => {
    // simulate server sort
    setLoading(true);

    // instead of setTimeout this is where you would handle your API call.
    setTimeout(() => {
      setData(orderBy(items, column.selector, sortDirection));
      setLoading(false);
    }, 100);
  };

  console.log();
  return (
    <DataTable
      title="Адреса"
      columns={columns}
      data={items}
      onSort={handleSort}
      sortServer
      progressPending={loading}
      persistTableHead
    />
  );
};
const rootElement = document.getElementById("root");
render(<SortingServerSide />, rootElement);

// storiesOf("Sorting", module).add("Server-Side", () => <SortingServerSide />);
