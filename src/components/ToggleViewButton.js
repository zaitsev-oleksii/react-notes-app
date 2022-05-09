const ToggleViewButton = (props) => {
  const show = props.show;
  const text = show ? 'Show' : 'Hide';
  return (
    <input onClick={props.handleClick} className="ToggleViewButton" value={`${text} Archived`} type="button" />
  ) 
 }
 
 export default ToggleViewButton;