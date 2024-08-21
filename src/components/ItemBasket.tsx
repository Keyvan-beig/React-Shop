import { Rating } from "@mui/material"
import { typeProductBasket } from "../types/typeBasket"

const ItemBasket = ({ product }: { product: typeProductBasket }) => {

    return (
        <div className="flex gap-4 py-1 px-3">
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-[100px] rounded-xl" />
                <p className="absolute right-[-5px] bottom-[5px] bg-gray-300 px-2 rounded-[50%] text-[#FE8A00] text-[20px] font-bold]">{product.count}</p>
            </div>
            <div className="flex flex-col justify-center w-full">
                <div className="flex justify-between text-[14px] font-bold my-2">
                    <p className="">{product.name}</p>
                    <p>{product.price} $</p>
                </div>
                <p className="text-[14px] my-2">{product.description}</p>
                <Rating value={product.rate} readOnly />
            </div>
        </div>
    )
}

export default ItemBasket