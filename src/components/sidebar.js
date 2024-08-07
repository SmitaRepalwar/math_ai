import { RiComputerLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "./sidebar.css"

const SideBar=(props)=>{

    const {onChangesidebar, isExpanded}=props
    console.log(isExpanded)

    const sidebarToggle=()=>{
        onChangesidebar();
    }

    return(

       <div className="sidebar-background" onClick={sidebarToggle}>
        <div className="card-icons">
            <div className="profile-success-container">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png" alt="profile" className="profile-img" />
            </div>
            <div className="icons">
                <div className="sidebar-item">
                    <CiSearch className="nav-item-mobile-link"/> 
                    {isExpanded && <p className="sidebar-description">Search</p>}
                </div>
                <div className="sidebar-item">
                    <RiComputerLine className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Home</p>}
                </div>
                <div className="sidebar-item">
                    <FaRegQuestionCircle className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Help</p>}
                </div>
                <div className="sidebar-item">
                    <FaCalendarDay className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Calender</p>}
                </div>
                <div className="sidebar-item">
                    <LuBuilding2 className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Recent Releases</p>}
                </div>
                <div className="sidebar-item">
                    <AiFillDollarCircle className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Money</p>}
                </div>
                <div className="sidebar-item">
                    <FaHeadphones className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Music</p>}
                </div>
            </div>
         </div>
         <div className="sidebar-item">
            <IoIosSettings className="nav-item-mobile-link" />
            {isExpanded && <p className="sidebar-description">Settings</p>}
        </div> 
      </div> 
    )
}
export default SideBar