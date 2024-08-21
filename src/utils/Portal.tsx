import ReactDOM from "react-dom"
import { IoCloseCircleOutline } from "react-icons/io5";
import { typeProduct } from "../types/typeProduct";
import { FiTruck } from "react-icons/fi";
import { LuShieldOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addItem, basketState } from "../redux/basketSlice";
import { Rating } from "@mui/material";
import ToggelBottom from "../components/ToggelBottom";
import { useState } from "react";
import Count from "../components/Count";
import ModalUpdateProd from "../components/ModalUpdateProd";
import AlertSnackBar from "../components/AlertSnackBar";

interface PageProp {
    item: typeProduct
    close: any
}

const dialogStyle: {} = {
    position: "fixed",
    top: "0",
    height: "100vh",
    width: "100%",
    direction: "rtl",
    zIndex: 10
}

const Portal: React.FC<PageProp> = ({ item, close }) => {

    const addBasket = useDispatch()
    const basket = useSelector(basketState)

    const [size, setSize] = useState("S")
    const [count, setCount] = useState(1)
    const [modalOpen, setModalOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const outSide = (event: any) => {
        if (event.target.id === "myDiv") {
            close(null)
        }
    }

    window.document.addEventListener('click', outSide)

    const checkBasket = () => {

        const check = basket.items.some(product => item.id === product.id)

        if (check) {
            setModalOpen(true)
        } else {
            addBasket(addItem({ ...item, size: size, count: count }))
            setAlertOpen(true)
        }
    }

    const modalContent = (
        <>
            <div style={dialogStyle} id="myDiv" className="backdrop-blur-sm">
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
                fixed
                z-20
                ">
                    <div >
                        <IoCloseCircleOutline onClick={() => close(null)} className="text-[25px]" />
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
                            <Rating value={item.rate} readOnly />
                            <Count count={count} setCount={setCount} />
                            <ToggelBottom size={size} setSize={setSize} />
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
                                    className="
                                        px-5 
                                        py-1 
                                        border 
                                        rounded-3xl
                                        border-[#FE8A00] 
                                        text-[#FE8A00] 
                                        hover:bg-[#FE8A00] 
                                        hover:text-white"

                                    onClick={() => checkBasket()}>
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

            {modalOpen && <ModalUpdateProd alert={setAlertOpen} open={modalOpen} setOpen={setModalOpen} item={{ ...item, count: count, size: size }} />}

            {alertOpen &&
                <AlertSnackBar
                    setOpen={setAlertOpen}
                    type={"success"}
                    text="Your request has been successfully completed!" />
            }

        </>
    )

    return ReactDOM.createPortal(modalContent, document.body)

}

export default Portal