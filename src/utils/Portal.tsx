import ReactDOM from "react-dom"
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { typeProduct } from "../types/typeProduct";
import { FiTruck } from "react-icons/fi";
import { LuShieldOff } from "react-icons/lu";
import { useState } from "react";

interface PageProp {
    // show: boolean
    // close: (value: boolean) => void
    item: typeProduct
    close: any
}

const Portal: React.FC<PageProp> = ({ item, close }) => {

    const modalContent = (
        <div  className="w-[40%] flex justify-between bg-white p-3 m-4 rounded-2xl">
            <div>
                <IoCloseCircleOutline onClick={() => close(null)} />
            </div>
            <div dir="ltr" className=" w-[70%]">
                <div>
                    <div className="flex justify-between items-start">
                        <img
                            className="w-[100%] rounded-2xl"
                            src={item.image}
                            alt={item.name}
                        />
                    </div>
                    <div className="flex justify-between text-[14px] font-bold my-2">
                        <p className="">{item.name}</p>
                        <p>{item.price} $</p>
                    </div>
                    <p className="text-[14px]">{item.description}</p>
                    <p>{item.rate} star</p>
                    <div className="flex [&>*]:border [&>*]:px-2 my-3">
                        <button style={{borderRadius : "10px 0 0 10px"}}><CiCircleMinus /></button>
                        <p>01</p>
                        <button style={{borderRadius : "0 10px 10px 0"}}><CiCirclePlus /></button>
                    </div>
                    <div className="[&>*]:border [&>*]:p-1 [&>*]:w-10 flex justify-between">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <FiTruck />
                        </div>
                        <div>
                            <p className="font-bold">Delivery limit</p>
                            <p>Free delivery within 50 km's.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <LuShieldOff />
                        </div>
                        <div>
                            <p className="font-bold">Return Policy</p>
                            <p>With-in 5days of product delivery.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

    return ReactDOM.createPortal(modalContent, document.getElementById("react-portal") as Element)

}

export default Portal