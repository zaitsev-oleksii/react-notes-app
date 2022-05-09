const TableCell = (props) => {
  return (
    <div style={props.style} className={props.class ? props.class :'TableCell'}>
      {props.children}
    </div>
  );
}

export default TableCell;