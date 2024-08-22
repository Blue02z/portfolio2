import Navbar from "../Navbar"
import DecorationCircle from "../decoration/DecorationCircle"
import { IconNetwork } from "../decoration/IconNetwork"
function SectinOne(){
    return(
        
        <div className=" bg-white dark:bg-slate-900 flex items-center justify-between ">
            <div className="ml-10">
                    <div className="leading-[55px]">
                        <h2 className="font-Poppins font-bold text-[45px]">Olá, eu sou o</h2>
                        <h1 className="font-Poppins font-bold text-[55px] text-[#009DFF]">Marcus Vinicius</h1>
                        <h3 className="font-Poppins font-bold text-[25px] ">Programador web front-end</h3>
                    </div>

                    <div className="flex gap-20">
                        <IconNetwork><a href="https://github.com/Blue02z" target="blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="w-[25px] h-[25px]" /></a></IconNetwork>
                        <IconNetwork><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" className="w-[25px] h-[25px]" /></IconNetwork>
                    </div>

                </div>

            <div className="h-[568px] flex justify-end z-[0]">
                
                <DecorationCircle/>
            </div>
        </div>
    )
}

export default SectinOne