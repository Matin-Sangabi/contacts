import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import LayOut from "../../layout/Layout";
import { postAllContacts } from "../../service/postContacts";
import "./AddContact.css";
const AddNewContact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    label: "Mobile",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInput({...input , [e.target.name] : e.target.value});
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    if(!input.name || !input.number){
        alert("Please Insert The Name or Number");
        return;
    }
    postContacts();
    setInput({
        name: "",
        email: "",
        number: "",
        company: "",
        label: "Mobile",
      });
  }
  const postContacts = async () =>{
    try{
        await postAllContacts(input);
        navigate("/");
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <LayOut>
      <section className="page-content">
        <form className="add-contact" onSubmit={submitHandler}>
          <h1>Add New Contact</h1>
          <div className="add-name add">
            <input  name="name" onChange={changeHandler} placeholder="name ..." />
          </div>
          <div className="add-email">
            <input 
              type="text"
              name="number"
              onChange={changeHandler} placeholder="phone Number ..."
            />
            <input  type="text" name="email" onChange={changeHandler} placeholder="Email..." />
          </div>
          <div className="add-company add">
            <input  name="company" onChange={changeHandler} placeholder="company ..." />
          </div>
          <div className="add-label">
            <select onChange={changeHandler} name="label">
              <option value="Mobile">Mobile</option>
              <option value="Tell">Tell</option>
              <option value="fax">fax</option>
            </select>
          </div>
          <button className="add-btn">Add</button>
        </form>
      </section>
    </LayOut>
  );
};

export default AddNewContact;
