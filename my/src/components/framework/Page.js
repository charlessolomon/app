import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import './css/Page.css'

const Page = ({ children }) => {
    return(
        <div className="Page">
            <Navbar/>
            <div className="box">
                <Sidebar/>
                <div className="main">
                    {children}
                </div>  
            </div>
            
        </div>
    );
};

export default Page;