import { LuShoppingBag } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { basketState } from "../redux/basketSlice";

const Footer = () => {

    const basket = useSelector(basketState)

    return (
        <div className="
            bg-[#FE8A00] 
            flex
            justify-between
            text-white 
            p-3
            ">
            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <LuShoppingBag className="text-[20px]" />
                    <p>{basket.items.length} Item added to Cart</p>
                </div>
                <div className="flex items-center gap-2">
                    <CiHeart className="text-[25px]" />
                    <p>2 Wish list</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <SlBasket className="text-[22px]" />
                85$
            </div>
        </div>
    )
}

export default Footer