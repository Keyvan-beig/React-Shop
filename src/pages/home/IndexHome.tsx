import { useState } from "react"
import SecondHeader from "../../components/SecondHeader"
import ShowItem from "../../components/ShowItem"
import Portal from "../../utils/Portal"
import { typeProduct } from "../../types/typeProduct"
import useProductGet from "../../hooks/products/useProductGet"
import AutoSlider from "../../components/AutoSlider"
import BackDropLoading from "../../components/BackDropLoading"
import ErrorDialog from "../../components/ErrorDialog"

interface typeData {
    data: typeProduct[]
    error: string | null
}

const IndexHome = () => {

    const { data, error } = useProductGet()

    const [openError, setOpenError] = useState(false);

    const [showPrtal, setShowPortal] = useState<typeProduct | null>(null)

    return (
        <>
            {!data?.data && !data?.error && <div className="h-[100vh] bg-white"><BackDropLoading /> </div> }

            {data?.data && <div className="m-auto w-[90%] bg-gray-50 p-5">

                <SecondHeader />

                <div className="w-[100%] h-44 border">
                    <AutoSlider />
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