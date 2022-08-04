import { Link } from "react-router-dom";
import "./popup.css";
const Popup = ({ onDelete, contact }) => {
  console.log(contact);
  return (
    <div className="popup">
      <div>{contact.label}</div>
      <div>{contact.company}</div>
      <div className="popup-btn">
        <button onClick={onDelete}>Delete</button>
        <Link to={`/edit/${contact.id}`} state={contact}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Popup;
