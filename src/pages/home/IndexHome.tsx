import { useState } from "react"
import SecondHeader from "../../components/common/SecondHeader"
import ShowItem from "../../components/items/ShowItem"
import Portal from "../../utils/Portal"
import { typeProduct } from "../../types/typeProduct"
import useProductGet from "../../hooks/products/useProductGet"
import BackDropLoading from "../../components/loading/BackDropLoading"
import ErrorDialog from "../../components/modal/ErrorDialog"
import Slider from "../../components/Slider"

const IndexHome = () => {

    const { data } = useProductGet()

    const [showPrtal, setShowPortal] = useState<typeProduct | null>(null)

    return (
        <>
            {!data?.data && !data?.error && <div className="h-[100vh] bg-white"><BackDropLoading /> </div> }

            {data?.data && <div className="m-auto w-[90%] bg-gray-50 p-5">

                <SecondHeader />

                <div className="w-[100%] h-44 border">
                    <Slider />
                </div>

                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    my-4 
                ">

                    {data?.data && data?.data.map(item => <ShowItem key={item.id} product={item} portal={setShowPortal} />)}

                </div>
            </div>
            }

            {data?.error && <div className="h-[100vh] bg-white"><ErrorDialog message={data?.error.message}/></div>}

            {showPrtal && <Portal item={showPrtal} close={setShowPortal} />}
        </>
    )
}

export default IndexHome