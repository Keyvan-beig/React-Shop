import Footer from "../../components/Footer";
import ShowItem from "../../components/ShowItem"
import SecondHeader from "../../components/SecondHeader";
import useProductGet from "../../hooks/products/useProductGet"
import Portal from "../../utils/Portal";


const Products = () => {

    const { data, error } = useProductGet()

    return (
        <>
            <div className="w-[90%] m-auto bg-gray-50 p-5">
                <SecondHeader />
                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    p-3 
                ">
                    {error && error.message}
                    {!data && "Loading..."}
                    {data && data.map(item => <ShowItem key={item.id} product={item} />)}

                </div>
            </div>
            <Portal show={true} />
            <Footer />

        </>
    )
}

export default Products 