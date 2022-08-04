
import { NavLink } from "react-router-dom";
import { HiOutlineHome ,HiUserAdd } from "react-icons/hi";
import "./sidebar.css";
const items = [
  { name: "Home" , icon : <HiOutlineHome/> , to: "/" },
  { name: "AddContact", icon : <HiUserAdd/> , to: "/add-contact" },
];
const SideBar = () => {
  return (
    <header className="sidebar">
      <nav className="sidebar-content">
        <h1 className="sidebar-title">Contact-list</h1>
        <div className="sidebar-header">
          <div className="profile">
          <img src={require('./../../assets/images/man-with-glasses-smiling-looking-into-distance.jpg')} className="profile-img" alt="profile"/>
          </div>
          <div className="profile-title">
            <span><b>Matin Sangabi</b></span>
            <span>Designer Manager</span>
          </div>
        </div>
        <ul className="sidebar-list">
          {items.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <NavLink className="nav-link" to={item.to}>
                    {item.name}
                    <span className="sidebar-icon">{item.icon}</span>
                </NavLink>
              </li>
            )
          })}
          
        </ul>
        <h4 className="sidebar-footer">Contact-list v1.0</h4>
      </nav>
    </header>
  );
};

export default SideBar;
