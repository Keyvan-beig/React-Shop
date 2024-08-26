import { alerShowSet, alertTypeSet } from "../../redux/commonStateSlice"
import getStorage from "../../utils/storage/getStorage"

const logOutAcount = (dispatch:any) => {
    const login = getStorage("login")
    if (login) {
        localStorage.removeItem("login")
        dispatch(alerShowSet(true))
        dispatch(alertTypeSet('success'))
    } else {
        dispatch(alerShowSet(true))
        dispatch(alertTypeSet('error'))
    }
}

export default logOutAcount