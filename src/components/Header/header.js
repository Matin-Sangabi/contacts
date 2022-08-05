import "./header.css";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiBell, FiShoppingBag, FiBookOpen } from "react-icons/fi";
import { useEffect, useRef } from "react";


const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  
  const changeHandler = (e) => {
    navigate({
      pathname: "/",
      search: `?q=${e.target.value}`,
    });
  };
  return (
    <header className="header">
      <nav className="header-content">
        <div className="search">
          <span className="search-icon">
            <FiSearch />
          </span>
          <input
            type="text"
            onChange={changeHandler}
            placeholder="search..."
            ref={inputRef}
          />
        </div>
        <div className="header-profile">
          <div className="avatar">
            <img
              src={require("./../../assets/images/man-with-glasses-smiling-looking-into-distance.jpg")}
              alt="avatar"
              className="avatar-img"
            />
          </div>
          <span>
            <FiShoppingBag />
          </span>
          <span>
            <FiBell />
          </span>
          <span>
            <FiBookOpen />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
