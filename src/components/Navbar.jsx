function Navbar(){
    
    return(
        
        <>
            <div className="w-full bg-transparent z-[10] absolute">
                <div className="flex justify-between mx-5 mt-4">
                    <div>
                        <h1 className="text-2xl font-Poppins-extraBold font-extrabold dark:text-white">MarcusVin</h1>
                    </div>
                    <div>
                        <ul className="flex gap-5 text-[20px] font-Poppins font-bold text-white">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Competências</a></li>
                            <li><a href="#">Projetos</a></li>
                            <li><div className="w-[77px] h-[30px]
                            bg-white rounded-[12px] flex justify-start items-center hover:cursor-pointer"><div className="w-[20px] h-[20px] rounded-full bg-[#FFFF00] mx-[6px] drop-shadow-xl "></div></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar