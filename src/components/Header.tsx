import { FiPhone } from "react-icons/fi";


const Header = () => {
    return (
        <div className="
            bg-[#FE8A00] 
            flex 
            justify-between
            text-white 
            p-3
            ">
            <div className="w-[20%]">

            </div>
            <div className="m-auto">
                <p>
                    Get 50% Off on Selected Item | Shop Now
                </p>
            </div>
            <div className="
                flex 
                items-center 
                gap-2 
                justify-end
                w-[20%]
                ">
                <p className="md:block hidden text-[14px]">
                    +91(720)0901896
                </p>
                <FiPhone />
            </div>


        </div>
    )
}

export default Header