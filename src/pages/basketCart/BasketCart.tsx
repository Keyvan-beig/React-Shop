import { useSelector } from "react-redux"
import { basketState } from "../../redux/basketSlice"
import ShowItem from "../../components/ShowItem"
import { typeProductBasket } from "../../types/typeBasket"

const BasketCart = () => {

    const { items }: { items: typeProductBasket[] } = useSelector(basketState)

    return (
        <>
            {items && items.map(_item => <ShowItem key={_item.id} product={_item} />)}
        </>
    )
}

export default BasketCart