import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'

interface dropDownProps {
    dropDownInfo:{
        icon: JSX.Element,
        title: string,
        options:{
            optionName: string,
            query: string
        }[],
    }
}
const Dropdown  = ({dropDownInfo}: dropDownProps): JSX.Element => {
    const [currentVal, setCurrentVal] = useState <{optionName: string,query: string,}>(dropDownInfo.options[0] || {});
    const [open, setOpen] = useState<Boolean>(false);
    const handleOnClick = () => {
        setOpen(prev => !prev);
    }
  return (
    <div className="option" onClick={handleOnClick} >
      {dropDownInfo.icon}
      <span>
        {dropDownInfo.title}: {currentVal.optionName}
      </span>
      <div className={`ms-2 option__icon ${open && 'icon-twist'}`}>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      {/* Ul */}
      <ul className={`${open && "show"}`}>
        {dropDownInfo.options.map(option => (
            <li className={`${currentVal?.optionName === option.optionName && "option-selected"}`} onClick={(event) => {event.stopPropagation()}}>
                <Link to="/">{option.optionName}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown