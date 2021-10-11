import { useEffect, useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import PinDetail from "./PinDetail";

const NameHeader = () => {
  return <></>;
};

export default function CityTable(props) {
  const dataItem = props.dataItem;
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = [];
    Object.keys(dataItem.cities).forEach((city) => {
      const cityObj = {
        name: city,
        pin: dataItem.cities[city],
      };
      arr.push(cityObj);
    });
    setData([...arr]);
  }, []);

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
      data={data}
      detail={PinDetail}
      style={{
        height: "100vh",
        width: "100vw",
      }}
      expandField="expanded"
      onExpandChange={expandChange}
    >
      <Column field="name" headerCell={NameHeader} width="300" />
    </Grid>
  );
}
