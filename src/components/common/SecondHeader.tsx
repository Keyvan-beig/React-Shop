import { RxPerson } from "react-icons/rx";
import AnchorTemporaryDrawer from "../../utils/AnchorTemporaryDrawer";
import { useState } from "react";
import ShowCartModal from "../../utils/ShowCartModal";
import { NavLink } from "react-router-dom";
import MenuAcount from "../menu/MenuAcount";

const SecondHeader = () => {

    const [showCart, setShowCart] = useState<boolean>()

    return (
        <>
            <div dir="ltr" style={{ fontFamily: "outfit" }} className="flex justify-between py-5 items-center">
                <div className="items-center gap-5 flex">
                    <img className="w-12" src="https://s3-alpha-sig.figma.com/img/6b20/415f/edac8b4ec9a195f79e28cf4c95c69be1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAcNuNm0Os7DJ9nWeBu7pVfOTMOfZaD380T4mIvR26rkICk-DbD7CYOJx1sCqEKhbPdn6tjMeusm4T0qWDTVqg8xqUIDjVfTgd6Lw03QgOSyinyVMTlMEsi7ov561seZ0wrxPq5ppFjAAk2lUwjSOM6AYF712L7kO5G9MbT2q~Gs7RgLGnuUkxftOfrPjHLgTGHkoCw7BhkWVxWpE4flCPSO0DkzWfT3rCYBB6cPREFg7u0P1zs2UtGi2UHOe~efFvsBYb4Ky8M2sYbyKhO6~ror~MUscWbzVHBawUjBt6XgvI8Y~8izag9n1meZyCiInhSRLjpD1-SB6Z6G2liauQ__" alt="" />
                    <p className="text-[32px] text-[#FE8A00]">
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
                    {/* <RxPerson /> */}
                    {/* <NavLink to={"/login"} className="mx-1">Account</NavLink> */}
                    <MenuAcount />
                    <p onClick={() => setShowCart(!showCart)} className="mx-5">Cart</p>
                </div>
                <div className="block lg:hidden">
                    <AnchorTemporaryDrawer />
                </div>
            </div>

            {showCart && <ShowCartModal setShowCart={setShowCart} />}
        </>

    )
}

export default SecondHeader