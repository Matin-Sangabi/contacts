import { useEffect, useState } from "react";

import { FiUser } from "react-icons/fi";
import Popup from "../../components/popup/popup";
import LayOut from "../../layout/Layout";
import { DeleteContacts } from "../../service/deleteContacts";
import { getAllContacts } from "../../service/getContacts.";
import "./homepage.css";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    getAllContacts()
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);
  const togglePopUp = (id) => {
    setIsOpen((prevState)=>{
       return  prevState ? null : id
    });
  };
  console.log(isOpen)
  const removeContact = async (id) => {
      try{
        await DeleteContacts(id);
        const response = await getAllContacts();
        setContacts(response.data);
      }
      catch(err){
        console.log(err)
      }
  };
  return (
    <LayOut>
      <section className="page-content">
        {contacts.map((contact) => {
          return (
            <div
              key={contact.id}
              className="contact-list"
              onClick={() => togglePopUp(contact.id)}
              style={isOpen === contact.id ? {height : "270px"} : {height : "200px"}}
            >
              <span className="circle c-0"></span>
              <span className="circle c-1"></span>
              <span className="user">
                <FiUser />
              </span>
              <h1 className="contact-name">{contact.name}</h1>
              <h5>{contact.email}</h5>
              <h5>{contact.number}</h5>
              {isOpen === contact.id && <Popup onDelete={()=> removeContact(contact.id)} contact={contact} />}
            </div>
          );
        })}
      </section>
    </LayOut>
  );
};

export default HomePage;
