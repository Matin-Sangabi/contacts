import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import Popup from "../../components/popup/popup";
import LayOut from "../../layout/Layout";
import { DeleteContacts } from "../../service/deleteContacts";
import { getAllContacts } from "../../service/getContacts.";
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchItem] = useSearchParams();
  const [contacts, setContacts] = useState([]);
  const [SearchContacts, setSearchContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  const search = searchItem.get('q')|| "";
  useEffect(() => {
    getAllContacts()
      .then((res) => {
        setContacts(res.data) ;
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterContacts = contacts.filter((c) => {
      return Object.values(c).join(" ").toLowerCase().includes(search.toLocaleLowerCase())
    });
    setSearchContacts(filterContacts);
  }, [contacts, search]);

  const togglePopUp = (id) => {
    setIsOpen((prevState) => {
      return prevState ? null : id;
    });
  };

  const removeContact = async (id) => {
    try {
      await DeleteContacts(id);
      const response = await getAllContacts();
      setContacts(response.data);
      navigate({
        pathname : "/" , 
        search : ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LayOut>
      <section className="page-content">
        {SearchContacts.map((contact) => {
          return (
            <div
              key={contact.id}
              className="contact-list"
              onClick={() => togglePopUp(contact.id)}
              style={
                isOpen === contact.id
                  ? { height: "270px" }
                  : { height: "200px" }
              }
            >
              <span className="circle c-0"></span>
              <span className="circle c-1"></span>
              <span className="user">
                <FiUser />
              </span>
              <h1 className="contact-name">{contact.name}</h1>
              <h5>{contact.email}</h5>
              <h5>{contact.number}</h5>
              {isOpen === contact.id && (
                <Popup
                  onDelete={() => removeContact(contact.id)}
                  contact={contact}
                />
              )}
            </div>
          );
        })}
      </section>
    </LayOut>
  );
};

export default HomePage;
