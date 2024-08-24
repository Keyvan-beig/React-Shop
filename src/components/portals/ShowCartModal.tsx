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
}

const ShowCartModal: React.FC<propType> = ({ setShowCart }) => {

    const basketStt = useSelector(basketState)

    const outSide = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.id === "myDiv") {
            setShowCart(false)
        }
    }
    window.document.addEventListener('click', outSide)

    const user = getStorage("login")

    const ShowCart = (
        <div id="myDiv" className="
            flex 
            items-center 
            justify-center
            fixed
            z-30
            top-0
            w-full
            h-[100vh]
            text-[14px]
            ">
            <div className="
                grid 
                gap-5 
                lg:grid-cols-[2fr,1fr]
                lg:grid-rows-[10px,auto]
                grid-rows-[10px,auto,auto,auto]
              bg-white 
                rounded-lg
                w-[80%]
                h-[470px]
                p-3
                shadow-lg
                ">
                <div dir="rtl" className="lg:col-span-2">
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
                        <p className="text-[20px]">Delivery Information</p>

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

    )

    return ReactDOM.createPortal(ShowCart, document.body)
}

export default ShowCartModal