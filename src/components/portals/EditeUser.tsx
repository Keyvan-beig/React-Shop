import ReactDOM from "react-dom"
import { FormEvent, useState } from "react"
import getStorage from "../../utils/storage/getStorage"
import useEditeUser from "../../hooks/form/useEditeUser"
import setStorage from "../../utils/storage/setStorage"
import { Box, CircularProgress } from "@mui/material"
import AlertSnackBar from "../alert/AlertSnackBar"


interface propType {
    setEditeUser: (editeUser: boolean) => void
}

const EditeUser: React.FC<propType> = ({ setEditeUser }) => {

    const dataUser = getStorage("login")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState("")
    const [err, setErr] = useState("")

    const [editeForm, setEditeForm] = useState({
        fullName: dataUser.fullName,
        city: dataUser.city,
        address: dataUser.address,
        phone: dataUser.phone
    })

    const { mutateAsync } = useEditeUser()

    const handelSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setAlert('')
        setErr('')

        const { data } = await mutateAsync(editeForm)

        setLoading(false)

        if (data?.length) {
            setStorage("login", editeForm)
            setAlert('success')
        } else {
            setErr('error')
        }
    }

    const outSide = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.id === "myDiv") {
            setEditeUser(false)
        }
    }
    window.document.addEventListener('click', outSide)

    const ui = (
        <>
            <div id="myDiv" className="w-full h-full flex items-center justify-center fixed top-0 right-0 z-40 backdrop-blur">
                <div className="shadow-lg w-[30%] bg-gray-50">
                    <form className="flex flex-col p-5 gap-5" onSubmit={handelSubmit}>
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                onChange={(e) => setEditeForm({ ...editeForm, fullName: e.target.value })}
                                value={editeForm.fullName}
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="border w-full p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input
                                onChange={(e) => setEditeForm({ ...editeForm, city: e.target.value })}
                                value={editeForm.city}
                                type="text"
                                id="city"
                                name="city"
                                className="border w-full p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Adress</label>
                            <input
                                onChange={(e) => setEditeForm({ ...editeForm, address: e.target.value })}
                                value={editeForm.address}
                                type="text"
                                id="address"
                                name="address"
                                className="border w-full p-2"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-bold p-3 flex justify-center gap-1">
                            Edite
                            {loading ?
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress size={20} />
                                </Box>
                                :
                                <p></p>
                            }
                        </button>
                    </form>
                </div>
            </div>

            {alert === "success" && <AlertSnackBar type={"success"} text={"complete request successfully"} />}
            {err && <AlertSnackBar type={"error"} text={err} />}
        </>
    )

    return ReactDOM.createPortal(ui, document.body)
}

export default EditeUser