import { CiSquarePlus } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TfiPencilAlt } from "react-icons/tfi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiChatHistoryLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
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
                <img className="profile-img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHiKtyhFjc7Wtri86aOB_pMsz49PFPTTnedFrt6NrBMKjwFHc1" />
                {isExpanded && <h1 className="pop-heading">PopAi</h1>}
            </div>
            <div className="icons">
             <div className="sidebar-item chat-icon">
                    <CiSquarePlus   className="nav-item-mobile-link"/> 
                    {isExpanded && <p className="sidebar-description">New Chat</p>}
                </div>
                <div className="sidebar-item">
                    <FaRegFilePdf  className="nav-item-mobile-link"/> 
                    {isExpanded && <p className="sidebar-description">Chat PDF</p>}
                </div>
                <div className="sidebar-item">
                    <TfiWrite  className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">AI Presentation</p>}
                </div>
                <div className="sidebar-item">
                    <TfiPencilAlt className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">AI Writer</p>}
                </div>
                <div className="sidebar-item">
                    <BsPersonWorkspace className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Workspace</p>}
                </div>
                <div className="sidebar-item">
                    <RiChatHistoryLine className="nav-item-mobile-link"/>
                    {isExpanded && <p className="sidebar-description">Chat History</p>}
                </div>
                
            </div>
         </div>
         <div className="sidebar-item last-item">
            <CgProfile className="nav-item-mobile-link" />
            {isExpanded && <p className="sidebar-description">Profile</p>}
        </div> 
      </div> 
    )
}
export default SideBar