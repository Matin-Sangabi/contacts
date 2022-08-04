import {Routes , Route} from "react-router-dom";
import EditContacts from "./components/EditContact/EditContacts";
import AddNewContact from "./pages/AddContact/AddNewContacts";
import HomePage from "./pages/HomePage/HomePage";
const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/add-contact" element={<AddNewContact/>}/>
            <Route path="/edit/:id" element={<EditContacts/>}/>
        </Routes>
     );
}
 
export default App;