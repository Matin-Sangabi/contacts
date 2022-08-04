import {Routes , Route} from "react-router-dom";
import routes from "./routes";
const App = () => {
    return ( 
        <Routes>
            {routes.map((item , index)=> <Route key={index} {...item}/>)}
        </Routes>
     );
}
 
export default App;