import { ModeToggle } from "../mode-toggle";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";

function Topbar(){
    const navigate = useNavigate();
    return(<>
    <div className=" flex flex-row items-center justify-between hover:cursor-pointer" onClick={()=>{navigate('/landing')}}>
        <div className="flex flex-row items-center gap-4">
            <img src={logo} className="w-10"></img>
            <div className="text-3xl text-purple-600 font-bold font-Montserrat hover:cursor-pointer" onClick={()=>{navigate('/landing')}}>DISHA</div>
        </div>
        
        <div className="flex flex-row justify-between w-1/6 items-center">
            <ModeToggle/>

        </div>
        
    </div>
    </>)
}

export default Topbar;