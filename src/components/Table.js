import TableCell from "./TableCell";
import TableRow from "./TableRow";

// const getColumnsWidthStyle = (widths) => widths
//   .map((w) => w.toString() + 'fr')
//   .join(' ');

const Table = (props) => {
  const data = props.data;
  const config = props.config;

  const columns = Object.values(config)
    .sort((a, b) => a.order - b.order)
    .map(col => col.display);

  return (
    <div className={props.className ? props.className : 'Table'}>
      <div className="TableHeader">
        { columns.map((column, idx) => <TableCell key={idx}>{column}</TableCell>) }
      </div>
      <div className="TableContent">
        { data.map((item, idx) => <TableRow data={item} config={config} key={idx} />) }
      </div>
    </div>
  );
}

export default Table;