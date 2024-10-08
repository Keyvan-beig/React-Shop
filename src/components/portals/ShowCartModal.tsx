import ReactDOM from "react-dom"
import { useSelector } from "react-redux"
import { basketState } from "../../redux/basketSlice"
import ItemBasket from "../items/ItemBasket"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiTruck } from "react-icons/fi";
import { LuShieldOff } from "react-icons/lu";
import getStorage from "../../utils/storage/getStorage";

interface propType {
    setShowCart: (showCart: boolean) => void
    setEditeUser: (editeUser: boolean) => void
}

const ShowCartModal: React.FC<propType> = ({ setShowCart, setEditeUser }) => {

    const basketStt = useSelector(basketState)


    const outSide = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.id === "myDiv") {
            setShowCart(false)
        }
    }
    window.document.addEventListener('click', outSide)

    const handelEdite = () => {
        setEditeUser(true)
        setShowCart(false)   
    }

    const user = getStorage("login")

    const ShowCart = (
        <>
            <div id="myDiv" className="
            flex 
            items-center 
            justify-center
            fixed
            z-10
            top-0
            w-full
            h-full
            text-[14px]
            backdrop-blur
            ">
                <div className="
                grid 
                gap-5 
                md:grid-cols-[2fr,1fr]
                md:grid-rows-[10px,auto]
                grid-rows-[10px,auto,auto,auto]
                rounded-lg
                w-[80%]
                h-full
                md:h-fit
                overflow-scroll
                md:overflow-auto
                p-3
                shadow-lg
                bg-gray-50
                "
                >
                    <div dir="rtl" className="md:col-span-2">
                        <IoIosCloseCircleOutline className="text-[20px]" onClick={() => setShowCart(false)} />
                    </div>
                    <div className="[&>*]:border [&>*]:rounded-lg grid grid-rows-[220px,auto] gap-3 ">
                        <div className="overflow-y-scroll">
                            {basketStt.items.length > 0 ?
                                basketStt.items.map(item => <ItemBasket key={item.id} product={item} />) :
                                <div className="flex items-center justify-center h-full">No Item</div>
                            }
                        </div>
                        <div className="grid content-between p-5" style={{ fontFamily: "outfit" }}>
                            <div className=" flex justify-between">
                                <p className="text-[20px]">Delivery Information</p>
                                <button
                                    onClick={handelEdite}
                                    className="border px-5 py-1 rounded-lg border-[#FE8A00] text-[#FE8A00] hover:bg-[#FE8A00] hover:text-white"
                                >
                                    Edit
                                </button>
                            </div>


                            <div className="text-[16px]">
                                <p>{user.fullName}</p>
                                <p>{user.city}</p>
                            </div>

                            <p className="text-[16px]">
                                {user.address}
                            </p>

                        </div>
                    </div>
                    <div className="border rounded-lg flex flex-col justify-between">
                        <div className="flex-1 grid content-between p-3">
                            <h2 className="text-[22px]">Order Summary</h2>
                            <div>
                                <p>Product added</p>
                                <p>{basketStt.items.length}</p>
                            </div>
                            <div>
                                <p>GST</p>
                                <p>0</p>
                            </div>
                            <div>
                                <p>S-GST</p>
                                <p>0</p>
                            </div>
                            <div>
                                <p>Total Cart Value<span>(in$)</span></p>
                                <p>{basketStt.invoice.totalPrice}</p>
                            </div>
                            <div>
                                <p>Discount<span>(in%)</span></p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-3 rounded-lg">
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
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

    return ReactDOM.createPortal(ShowCart, document.body)
}

export default ShowCartModal