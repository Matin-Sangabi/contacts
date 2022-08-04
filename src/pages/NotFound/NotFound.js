import LayOut from "../../layout/Layout";
import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <LayOut>
            Not Found Page
            <Link to={"/"}>Go To Home Page</Link>
        </LayOut>
     );
}

export default NotFound ;