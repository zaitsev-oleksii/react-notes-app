import './Modal.css';
import IconButton from '../components/IconButton';

import closeButtonIcon from '../images/x-lg.svg';

const Modal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none'

  return (
    <div 
      className={showHideClassName}
      onClick={props.handleClose}
    >
      <section 
        className='modal-main'
        onClick={(event) => { event.stopPropagation() }}
      >
        {props.children}
        <IconButton
          className="CloseButton"
          icon={closeButtonIcon}
          alt="close"
          handleClick={props.handleClose}
        />
      </section>
    </div>
  )
}

export default Modal;