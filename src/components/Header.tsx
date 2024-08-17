import { FiPhone } from "react-icons/fi";


const Header = () => {
    return (
        <div className="bg-[#FE8A00] grid sm:grid-cols-3 grid-cols-[50px,auto] text-white p-3">
            <div className="flex items-center gap-2">
                <FiPhone/>
                <p className="sm:block hidden text-[14px]">
                    +91(720)0901896
                </p>
                </div>
            <div className="sm:w-80 m-auto">
                <p>
                    Get 50% Off on Selected Item | Shop Now
                </p>
            </div>
        </div>
    )
}

export default Header