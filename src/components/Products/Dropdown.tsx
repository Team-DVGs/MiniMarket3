import React, {useState, useEffect} from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import { getNewSearchParamString } from '../../utils'

interface dropDownProps {
    dropDownInfo:{
        icon: JSX.Element,
        title: string,
        queryType: string,
        options:{
            optionName: string,
            query: string
        }[],
    }
}
const Dropdown  = ({dropDownInfo}: dropDownProps): JSX.Element => {
  const [open, setOpen] = useState<Boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentVal = dropDownInfo.options.find(
    (option) => option.query === searchParams.get(dropDownInfo.queryType)
  )?.optionName || dropDownInfo.options[0].optionName;
    const handleOnClick = () => {
        setOpen(prev => !prev);
    }
    const handleLinkOnClick = (event: React.MouseEvent, val: string) => {
      event.stopPropagation();
      setOpen(false);
    }

    
    
  return (
    <div className="option" onClick={handleOnClick}>
      {dropDownInfo.icon}
      <span>
        {dropDownInfo.title}: {currentVal}
      </span>
      <div className={`ms-2 option__icon ${open && "icon-twist"}`}>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      {/* Ul */}
      <ul className={`${open && "show"}`} style={{zIndex: "99"}}>
        {dropDownInfo.options.map((option) => (
          <li
            className={`${
              currentVal === option.optionName && "option-selected"
            }`}
            onClick={(event) => handleLinkOnClick(event, option.optionName)}
          >
            <Link
              to={`${getNewSearchParamString(
                dropDownInfo.queryType,
                option.query,
                searchParams.toString()
              )}`}
            >
              {option.optionName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown