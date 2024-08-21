import { SlBasket } from "react-icons/sl"
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { basketState, removeItem } from "../redux/basketSlice";
import { typeProduct } from "../types/typeProduct";
import { IoTrashOutline } from "react-icons/io5";

interface propType {
    product: typeProduct
    portal: any
}

const BasketOnImage: React.FC<propType> = ({ product, portal }) => {

    const basketStt = useSelector(basketState)
    const dispatch = useDispatch()
    
    const IsInBasket = basketStt.items.find(item => item.id === product.id)

    return (
        <div
            className={`
                backdrop-blur-sm
                absolute 
                top-0 
                right-0 
                w-full 
                h-full 
                rounded-lg 
                flex 
                items-center 
                justify-center 
                ${IsInBasket && "z-20"}
                `
            }
        >
            {IsInBasket ?
                <div className="bg-white p-3 rounded-[50%] text-[25px]" >
                    <SiTicktick />
                </div>
                :
                <div className="bg-white p-3 rounded-[50%] text-[25px]" onClick={() => portal(product)}>
                    <SlBasket />
                </div>
            }
            {IsInBasket &&
                <div
                    onClick={() => dispatch(removeItem(IsInBasket))}
                    className="
                      bg-red-500
                        absolute 
                        top-0 
                        right-0 
                        p-2 
                        text-[25px] 
                        m-2 
                        rounded-[50%]
                        text-white
                    ">
                    <IoTrashOutline />
                </div>
            }
        </div>
    )

}

export default BasketOnImage