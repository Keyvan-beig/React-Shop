import { useDispatch } from "react-redux"
import { typeProduct } from "../types/typeProduct"
import { addItem, removeItem } from "../redux/basketSlice"
import { useLocation } from "react-router-dom"

const ShowItem = ({ product }: { product: typeProduct }) => {

    const dispatch = useDispatch()

    const location = useLocation()

    return (
        <>
            <div>
                <img
                    className="w-[100%] rounded-2xl"
                    src={product.image}
                    alt={product.name}
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