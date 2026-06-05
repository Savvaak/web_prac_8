import Navbar from "../components/Navbar";
import Content from "./components/Content";
import { useParams } from "react-router-dom";
import cars from "../data";
import Footer from "../components/Footer";


function Building() {
    const { id } = useParams();
    const struct = cars[Number(id)];

    return (
        <> 
        <Navbar active='1'/>
        <Content struct={struct} />
        <Footer/>
        </>
    );
}
export default Building;