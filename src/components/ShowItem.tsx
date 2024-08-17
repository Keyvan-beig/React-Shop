import { useDispatch } from "react-redux"
import { typeProduct } from "../types/typeProduct"
import { useLocation } from "react-router-dom"
import Portal from "../utils/Portal"
import { FC, SetStateAction } from "react"

const ShowItem = ({ product, portal }: { product: typeProduct, portal :any }) => {
    
    const dispatch = useDispatch()

    const location = useLocation()

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
                <p className="text-[14px]">{product.description}</p>
                <p>{product.rate} star</p>
            </div>

            {/* <button
                className={`
                    p-2 
                  bg-slate-500 
                    mx-3 
                  text-white`
                }
                onClick={() => {
                    location.pathname === "/products" ?
                        dispatch(addItem(product)) :
                        dispatch(removeItem(product))
                }}
            >
                {location.pathname === "/products" ? "Add Item" : "Remove Item"}
            </button> */}


        </>
    )
}

export default ShowItem