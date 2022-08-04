import "./header.css";
import { FiSearch  , FiBell , FiShoppingBag , FiBookOpen} from "react-icons/fi";
const Header = () => {
  return (
    <header className="header">
      <nav className="header-content">
        <div className="search">
            <span className="search-icon"><FiSearch/></span>
          <input type="text"  placeholder="search..."/>
        </div>
        <div className="header-profile">
            <div className="avatar">
                <img src={require('./../../assets/images/man-with-glasses-smiling-looking-into-distance.jpg')} alt="avatar" className="avatar-img" />
            </div>
            <span><FiShoppingBag/></span>
            <span><FiBell/></span>
            <span><FiBookOpen/></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
