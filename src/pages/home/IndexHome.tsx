import { useState } from "react"
import SecondHeader from "../../components/SecondHeader"
import ShowItem from "../../components/ShowItem"
import useLastProducts from "../../hooks/products/useLastProducts"
import Portal from "../../utils/Portal"
import { typeProduct } from "../../types/typeProduct"

const IndexHome = () => {

    const { data, error } = useLastProducts()

    const [showPrtal, setShowPortal] = useState<typeProduct | null>(null)

    return (
        <>
            <div className="m-auto w-[90%] bg-gray-50 p-5">
                <SecondHeader />

                <div className="w-[100%] h-44 border">
                    slider

                </div>

                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    my-4 
                ">
                    {error && error.message}
                    {!data && "Loading..."}
                    {data && data.map(item => <ShowItem key={item.id} product={item} portal={setShowPortal} />)
                    }
                </div>
            </div>

            {showPrtal && <Portal item={showPrtal} close={setShowPortal}/>}
        </>
    )
}

export default IndexHome