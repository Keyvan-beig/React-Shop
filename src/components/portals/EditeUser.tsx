import ReactDOM from "react-dom"
import { FormEvent, useState } from "react"
import getStorage from "../../utils/storage/getStorage"
import useEditeUser from "../../hooks/form/useEditeUser"
import setStorage from "../../utils/storage/setStorage"
import { useDispatch } from "react-redux"
import { alerShowSet, alertTypeSet, loadingSet } from "../../redux/commonStateSlice"
import LoadingBottom from "../bottom/LodingBottom"


interface propType {
    setEditeUser: (editeUser: boolean) => void
}

const EditeUser: React.FC<propType> = ({ setEditeUser }) => {

    const dataUser = getStorage("login")
    const dispatch = useDispatch()

    const [editeForm, setEditeForm] = useState({
        fullName: dataUser.fullName,
        city: dataUser.city,
        address: dataUser.address,
        phone: dataUser.phone
    })

    const { mutateAsync } = useEditeUser()

    const handelSubmit = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(loadingSet(true))

        const { data } = await mutateAsync(editeForm)

        dispatch(loadingSet(false))

        if (data?.length) {
            setStorage("login", editeForm)
            dispatch(alerShowSet(true)) 
            dispatch(alertTypeSet('success'))
       
        } else {
            dispatch(alerShowSet(true))
            dispatch(alertTypeSet('error'))
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
                <div className="shadow-lg lg:w-[40%] md:w-[60%] w-[80%] bg-gray-50">
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
                        <LoadingBottom text={'Edite'} className={null}/>
                    </form>
                </div>
            </div>
        </>
    )

    return ReactDOM.createPortal(ui, document.body)
}

export default EditeUser