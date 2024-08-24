// import supabase from "../../supaBase/supaBase"
// import setStorage from "../storage/setStorage"
// import formData from "./formData"

import { FaWpexplorer } from "react-icons/fa"
import useCheckUser from "../../hooks/form/useCheckUser"
import formData from "./formData"
import { useState } from "react"

// const loginForm = async (form: any, setLoading: any, setShowAlert: any, setError: any) => {

//     const { formList } = formData(form)
//     setShowAlert('')

//     if (formList.phone.length === 11) {

//         setLoading(true)

//         const { data, error } = await supabase
//             .from('users')
//             .select("*")
//             .eq('phone', formList.phone)
//             .eq('password', formList.password)

//         if (data?.length) {
//             setStorage("login", data[0])
//             setShowAlert('success')
//             setLoading(false)
//             return "success"

//         } else if (error) {
//             setError(error.message);
//             setLoading(false)
//             return "error"
//         }
//         else {
//             setShowAlert('error')
//             setLoading(false)
//             return "error"
//         }
//     }
// }

// //     return { loginForm }
// // }

// export default loginForm

const loginForm = (form) => {

    const { formList } = formData(form)

    const { phone, setPhone } = useState(null)
    const { password, setPassword } = useState(null)

    const { data, error } = useCheckUser(phone, password)

    return { data, error }

}

export default loginForm