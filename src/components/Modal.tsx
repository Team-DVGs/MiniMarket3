import React, { Children } from 'react'
interface modalProps{ 
    width: number,
    minHeight: number,
    isOpen: boolean,
    children: JSX.Element,
    onClose: () => void;
}

const Modal = (props: modalProps):JSX.Element => {
    const styles: React.CSSProperties = {
        width: `${props.width}px`,
        height: `${props.minHeight}px`
    }
  return (
    <div
      className={`modal-component ${props.isOpen && "modal-component-open"}`}
    >
      <div className={`modal__layer `}></div>
      <div
        className={`modal__container ${props.isOpen && "modal__container-open"}`}
        style={styles}
      >
        <button className="btn-arrow" onClick={props.onClose}>
          <i className="fa-solid fa-x"></i>
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal