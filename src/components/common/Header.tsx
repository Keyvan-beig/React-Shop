import { FiPhone } from "react-icons/fi";

const Header: React.FC = () => {
    return (
        <div className="
            bg-[#FE8A00] 
            grid
            sm:grid-cols-[20%,auto,20%]
            grid-cols-[5%,auto,5%]
            text-white 
            p-3
            ">
            <div className="
                flex 
                items-center 
                gap-2 
                ">
                <FiPhone />
                <p className="md:block hidden text-[14px]">
                    +91(720)0901896
                </p>

            </div>
            <div className="m-auto">
                <p>
                    Get 50% Off on Selected Item | Shop Now
                </p>
            </div>
        </div>
    )
}

export default Header