import { typeProduct } from "../../types/typeProduct"
import { Rating } from "@mui/material"
import { useState } from "react";
import AddWishList from "../bottom/AddWishList";
import AddBasket from "../bottom/AddBasket";

interface propType {
    product: typeProduct
    portal: any
}

const ShowItem :React.FC<propType> = ({ product, portal }) => {
    
    const [showAddBasket, setShowAddBasket] = useState(false)

    return (
        <>
            <div>
                <div
                    onMouseOver={() => setShowAddBasket(true)}
                    onMouseOut={() => setShowAddBasket(false)}
                    className="relative"
                >
                    <img
                        className="w-[100%] rounded-2xl"
                        src={product.image}
                        alt={product.name}
                        
                    />
                    <AddWishList productId={product.id}/>
                    {showAddBasket && <AddBasket product={product} portal={portal}  />}
                </div>
                <div className="flex justify-between text-[14px] font-bold my-2">
                    <p className="">{product.name}</p>
                    <p>{product.price} $</p>
                </div>
                <Rating value={product.rate} readOnly />
            </div>
        </>
    )
}

export default ShowItem