import { typeProduct } from "../types/typeProduct"
import { Rating } from "@mui/material"

const ShowItem = ({ product, portal }: { product: typeProduct, portal :any }) => {
    return (
        <>
            <div>
                <img
                    className="w-[100%] rounded-2xl"
                    src={product.image}
                    alt={product.name}
                    onClick={() => (portal(product))}
                />
                <div className="flex justify-between text-[14px] font-bold my-2">
                    <p className="">{product.name}</p>
                    <p>{product.price} $</p>
                </div>
                <p className="text-[14px] my-2">{product.description}</p>
                <Rating value={product.rate} readOnly/>
            </div>
        </>
    )
}

export default ShowItem