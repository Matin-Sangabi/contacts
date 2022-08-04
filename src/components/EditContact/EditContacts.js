import { useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import LayOut from "../../layout/Layout";
import { updateOneContacts } from "../../service/updateContacts";

const EditContacts = () => {
  const getState = useLocation();
  const navigate = useNavigate();
  const id = getState.state.id;
  console.log(id)
  const [input , setInput] = useState({...getState.state})
  const changeHandler = (e) =>{
    setInput({...input , [e.target.name] : e.target.value});
  } 
  const submitHandler = (e) =>{
    e.preventDefault();
    if(!input.name || !input.number){
        alert("Please Insert The Name or Number");
        return;
    }
    updateContacts();
  }
  const updateContacts = async () =>{
    try{
        await updateOneContacts(id , input);
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
          <h1>Edit Contact</h1>
          <div className="add-name add">
            <input
              name="name"
              onChange={changeHandler}
              placeholder="name ..."
              value={input.name}
            />
          </div>
          <div className="add-email">
            <input
              type="text"
              name="number"
              onChange={changeHandler}
              placeholder="phone Number ..."
              value={input.number}
            />
            <input
              type="text"
              name="email"
              onChange={changeHandler}
              placeholder="Email..."
              value={input.email}
            />
          </div>
          <div className="add-company add">
            <input
              name="company"
              onChange={changeHandler}
              placeholder="company ..."
              value={input.company}
            />
          </div>
          <div className="add-label">
            <select onChange={changeHandler} name="label" value={input.label}>
              <option value="Mobile">Mobile</option>
              <option value="Tell">Tell</option>
              <option value="fax">fax</option>
            </select>
          </div>
          <button className="add-btn">Edit</button>
        </form>
      </section>
    </LayOut>
  );
};

export default EditContacts;
