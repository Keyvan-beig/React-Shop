import DrawerHome from "../DrawerHome";
import { useState } from "react";
import ShowCartModal from "../portals/ShowCartModal";
import MenuAcount from "../menu/MenuAcount";
import getStorage from "../../utils/storage/getStorage";
import ShoudLogin from "../modal/ShoudLogin";
import EditeUser from "../portals/EditeUser";

const NavHeader: React.FC = () => {

    const [showCart, setShowCart] = useState<boolean>()
    const [alertOpen, setAlertOpen] = useState(false);
    const [editeUser, setEditeUser] = useState(false)

    const handelShowCart = () => {
        const login = getStorage("login")
        login ?
            setShowCart(!showCart)
            :
            setAlertOpen(true)
    }

    return (
        <>
            <div dir="ltr" style={{ fontFamily: "outfit" }} className="flex justify-between py-5 items-center">
                <div className="items-center sm:gap-5 flex">
                    <img className="w-12" src="https://s3-alpha-sig.figma.com/img/6b20/415f/edac8b4ec9a195f79e28cf4c95c69be1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAcNuNm0Os7DJ9nWeBu7pVfOTMOfZaD380T4mIvR26rkICk-DbD7CYOJx1sCqEKhbPdn6tjMeusm4T0qWDTVqg8xqUIDjVfTgd6Lw03QgOSyinyVMTlMEsi7ov561seZ0wrxPq5ppFjAAk2lUwjSOM6AYF712L7kO5G9MbT2q~Gs7RgLGnuUkxftOfrPjHLgTGHkoCw7BhkWVxWpE4flCPSO0DkzWfT3rCYBB6cPREFg7u0P1zs2UtGi2UHOe~efFvsBYb4Ky8M2sYbyKhO6~ror~MUscWbzVHBawUjBt6XgvI8Y~8izag9n1meZyCiInhSRLjpD1-SB6Z6G2liauQ__" alt="" />
                    <p className=" text-[20px] sm:text-[25px] md:text-[32px] text-[#FE8A00]">
                        Minimal <span style={{ color: "red" }}>Shop</span>ping
                    </p>
                    <div className="hidden lg:flex gap-5">
                        <p>Categories</p>
                        <p>Deals</p>
                        <p>What's New</p>
                        <p>Delivery</p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center">
                    <MenuAcount setEditeUser={setEditeUser} />
                    <button onClick={handelShowCart} className="mx-5">Cart</button>
                </div>
                <div className="block lg:hidden">
                    <DrawerHome setShowCart={setShowCart} setAlertOpen={setAlertOpen} />
                </div>
            </div>

            {showCart ?
                <ShowCartModal setShowCart={setShowCart} setEditeUser={setEditeUser} />
                :
                ""
            }
            {alertOpen && <ShoudLogin open={alertOpen} setOpen={setAlertOpen} />}

            {editeUser && <EditeUser setEditeUser={setEditeUser} />}
        </>

    )
}

export default NavHeader