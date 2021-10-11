import { ChipList } from "@progress/kendo-react-buttons";

export default function PinDetail(props) {
  const dataItem = props.dataItem.pin.map((p) => ({ text: "" + p, value: p }));
  return <ChipList defaultData={dataItem} />;
}
