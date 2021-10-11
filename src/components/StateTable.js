import { useState, useEffect } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import CityTable from "./CityTable";

const initialDataState = {
  skip: 0,
  take: 20,
};

export default function StateTable(props) {
  const [page, setPage] = useState(initialDataState);
  const pageChange = (event) => {
    setPage(event.page);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const arr = [];
    Object.keys(props.data).forEach((key) => {
      const obj = {
        name: props.data[key]["name"],
        cities: props.data[key]["cities"],
      };
      arr.push(obj);
    });
    setData([...arr]);
  }, [props.data]);

  const expandChange = (event) => {
    let newData = data.map((item) => {
      if (item.name === event.dataItem.name) {
        item.expanded = !event.dataItem.expanded;
      }
      return item;
    });
    setData(newData);
  };

  return (
    <Grid
      data={data.slice(page.skip, page.take + page.skip)}
      skip={page.skip}
      take={page.take}
      total={data.length}
      pageable={true}
      onPageChange={pageChange}
      detail={CityTable}
      style={{
        height: "70vh",
        width: "100vw",
      }}
      expandField="expanded"
      onExpandChange={expandChange}
    >
      <Column field="name" title="States" width="300" />
    </Grid>
  );
}
