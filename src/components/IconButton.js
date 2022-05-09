const IconButton = (props) => {
  const icon = props.icon;
  const className = props.className ?? '';
  const handler = props.handleClick;
  const alt = props.alt ?? '';

  return (
    <div className={`IconButton ${className}`} onClick={() => handler()} >
      <img src={icon} alt={alt} />
    </div>
  )
}

export default IconButton;