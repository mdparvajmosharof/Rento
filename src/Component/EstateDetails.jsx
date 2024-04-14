import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


const EstateDetails = () => {
    const {id} = useParams();

    return (
        <div>
            <Navbar></Navbar>
details{id}
        </div>
    );
};

export default EstateDetails;