import { HiOutlineMenuAlt2 } from "react-icons/hi";


import './index.css'

const ToggleButton = props => {
    const {showSideBar, toggleButton} = props

    return (
        <div className="toggle-button-container">
            {toggleButton && <button className="open-sidebar-button" onClick={showSideBar}><HiOutlineMenuAlt2 size={22} /></button>}
        </div>
    )
}

export default ToggleButton