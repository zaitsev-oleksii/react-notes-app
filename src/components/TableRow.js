import TableCell from "./TableCell";

const TableRow = (props) => {
  const data = props.data;
  const config = props.config;

  return (
    <div className="TableRow">
      {
      Object.entries(data)
        .filter(([key, value]) => (key in config))
        .sort(([key1, value1], [key2, value2]) => config[key1].order - config[key2].order)
        .map(([col, value], idx) => <TableCell key={idx}>{value}</TableCell>)
      }
    </div>
  );
}

export default TableRow;