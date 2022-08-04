import EditContacts from "./components/EditContact/EditContacts";
import AddNewContact from "./pages/AddContact/AddNewContacts";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
    {path : "/" , element : <HomePage/>},
    {path : "/add-contact" , element : <AddNewContact/>},
    {path : "/edit/:id" , element : <EditContacts/>},
    {path : "/*" , element : <NotFound/>},
];

export default routes;