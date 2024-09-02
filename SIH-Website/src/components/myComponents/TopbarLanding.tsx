import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png"

function TopbarLanding(){
    return(<>
    <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
            <img src={logo} className="w-10"></img>
            <div className="text-4xl font-thin font-AbrilFatface">Disha</div>
        </div>
        
        <div className="flex flex-row justify-between w-1/6 items-center">
            <ModeToggle/>
            <Button variant={"outline"} className="rounded-full py-6 px-6"> Log in</Button>
        </div>
        
    </div>
    </>)
}

export default TopbarLanding;