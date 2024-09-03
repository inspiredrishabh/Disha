import { Button } from "../ui/button";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";

function TopbarLanding(){
    const navigate = useNavigate();
    return(<>
    <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
            <img src={logo} className="w-10"></img>
            <div className="text-3xl text-purple-600 font-bold font-Montserrat">DISHA</div>
        </div>
    
            <Button variant={"outline"} className="rounded-full py-6 px-6 " onClick={()=>navigate('/signin')}> Log in</Button>
        
        
    </div>
    </>)
}

export default TopbarLanding;

