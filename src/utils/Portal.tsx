import ReactDOM from "react-dom"
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { typeProduct } from "../types/typeProduct";
import { FiTruck } from "react-icons/fi";
import { LuShieldOff } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/basketSlice";
import Rating from "../components/Rating";

interface PageProp {
    item: typeProduct
    close: any
}

const Portal: React.FC<PageProp> = ({ item, close }) => {

    const addBasket = useDispatch()

    const modalContent = (
        <div style={{ position: "fixed", top: "0", height: "100vh" }}>
            <div className="
                w-[25%] 
                min-w-80 
                bg-white 
                p-3 m-4 
                rounded-2xl 
                flex 
                justify-between 
                h-[90vh] 
                min-h-[550px]
                text-[14px]
                ">
                <div >
                    <IoCloseCircleOutline onClick={() => close(null)} />
                </div>
                <div dir="ltr" className="flex flex-col justify-between" >
                    <div className="w-[90%] ">
                        <div className="flex justify-between items-start">
                            <img
                                className="w-[220px] h-[200px] rounded-2xl"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                        <div className="flex justify-between font-bold my-2">
                            <p className="">{item.name}</p>
                            <p>{item.price}$</p>
                        </div>
                        <p className="text-[14px] my-2">{item.description}</p>
                        <Rating score={item.rate} />
                        <div className="flex [&>*]:border [&>*]:px-2 my-3">
                            <button style={{ borderRadius: "10px 0 0 10px" }}><CiCircleMinus /></button>
                            <p>01</p>
                            <button style={{ borderRadius: "0 10px 10px 0" }}><CiCirclePlus /></button>
                        </div>
                        <div className="[&>*]:border [&>*]:p-1 [&>*]:w-10 flex justify-between my-2">
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div>
                                <FiTruck />
                            </div>
                            <div>
                                <p className="font-bold">Delivery limit</p>
                                <p>Free delivery within 50 km's.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <LuShieldOff />
                            </div>
                            <div>
                                <p className="font-bold">Return Policy</p>
                                <p>With-in 5days of product delivery.</p>
                            </div>
                        </div>
                        <div className="my-2">
                            <button
                                className="px-5 py-1 border rounded-3xl"
                                onClick={() => addBasket(addItem(item))}
                            >
                                add Item
                            </button>
                            <button
                                className="mx-4"
                                onClick={() => close(null)}
                            >
                                close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(modalContent, document.body)

}

export default Portal