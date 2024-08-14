import ShowItem from "../../components/ShowItem"
import useProductGet from "../../hooks/products/useProductGet"


const Products = () => {

    const { data, error } = useProductGet()

    return (
        <>
            <div className="
            grid
            sm:grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4
            p-3 
            ">

                {error && error.message}
                {!data && "Loading..."}
                {data && data.map(item => <ShowItem key={item.id} product={item} />)}

            </div>




        </>
    )
}

export default Products 