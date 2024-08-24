import { useDispatch, useSelector } from "react-redux"
import { addWish, removeWish, wishState } from "../../redux/wishListSlice"
import { CiHeart } from "react-icons/ci"

interface propType {
    productId: string
}

interface wishSttType {
    itemsId: string[]
}

const AddWishList: React.FC<propType> = ({ productId }) => {

    const wishStt : wishSttType = useSelector(wishState)
    const dispatch = useDispatch()
    const isWish = wishStt.itemsId.some(item => item === productId)

    const classes = `
        absolute
        top-0 
        right-0 
        p-2 
        text-[25px] 
        bg-white 
        m-2 
        rounded-[50%]
        `

    return (
        <>
            {isWish ?
                <div
                    onClick={() => dispatch(removeWish(productId))}
                    className={`${classes} text-[#FE8A00] z-10`}
                >
                    <CiHeart />
                </div>
                :
                <div
                    onClick={() => dispatch(addWish(productId))}
                    className={`${classes} z-10`}
                >
                    <CiHeart />
                </div>
            }
        </>
    )
}

export default AddWishList