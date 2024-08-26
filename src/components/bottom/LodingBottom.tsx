import { useSelector } from "react-redux"
import { commonState } from "../../redux/commonStateSlice"
import { Box, CircularProgress } from "@mui/material"

interface propType {
    text: string
    className: string | null
}
const LoadingBottom: React.FC<propType> = ({ text, className }) => {

    const commonStt = useSelector(commonState)

    return (
        <>
            <button
                disabled={commonStt.loading}
                type="submit"
                className={`
                    ${className}
                  bg-blue-500 
                  text-white 
                    font-bold 
                    p-3 
                    flex 
                    justify-center 
                    gap-1
                    my-3 
                    rounded-lg
                    `}
            >
                {text}
                {
                    commonStt.loading
                    &&
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20} />
                    </Box>
                }
            </button>
        </>
    )
}

export default LoadingBottom