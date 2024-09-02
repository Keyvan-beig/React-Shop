import { Suspense, lazy, useState } from "react"
import ShowItem from "../../components/items/ShowItem"
import { typeProduct } from "../../types/typeProduct"
import useProductGet from "../../hooks/products/useProductGet"
import BackDropLoading from "../../components/loading/BackDropLoading"
import Slider from "../../components/Slider"
import NavHeader from "../../components/common/NavHeader"
import SkeletonLoad from "../../components/loading/SkeletonLoad"

const LazyProductDetails = lazy(() => import('../../components/portals/ProductDetails'))
const LazyErrorDialog = lazy(() => import('../../components/modal/ErrorDialog'))

const IndexHome: React.FC = () => {
    const { data } = useProductGet()
    const [showPrtal, setShowPortal] = useState<typeProduct | null>(null)
    return (
        <>
            {!data?.data && !data?.error &&
                <div className="bg-white">
                    {/* <BackDropLoading /> */}
                    <SkeletonLoad/>
                </div>}

            {data?.data &&
                <div className="m-auto w-[90%] bg-gray-50 p-5">
                    <NavHeader />

                    <Slider />

                    <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    my-4 
                ">
                        {data?.data.map(item => <ShowItem key={item.id} product={item} portal={setShowPortal} />)}
                    </div>
                </div>
            }

            <Suspense fallback={<BackDropLoading />}>
                {data?.error &&
                    <div className="h-[100vh] bg-white">
                        <LazyErrorDialog message={data?.error.message} />
                    </div>}
                {showPrtal &&
                    <LazyProductDetails item={showPrtal} close={setShowPortal} />}
            </Suspense>
        </>
    )
}

export default IndexHome