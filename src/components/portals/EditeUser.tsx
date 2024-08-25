import ReactDOM from "react-dom"
import { FormEvent, useRef, useState } from "react"
import getStorage from "../../utils/storage/getStorage"
import useEditeUser from "../../hooks/form/useEditeUser"
import setStorage from "../../utils/storage/setStorage"

interface propType {
    setEditeUser: (editeUser: boolean) => void
}

const EditeUser: React.FC<propType> = ({ setEditeUser }) => {

    const user = getStorage("login")

    const [editeForm, setEditeForm] =  useState({
        fullName: user.fullName,
        city: user.city,
        address: user.address,
        phone: user.phone
    })
    
    const { mutateAsync } = useEditeUser()

    const handelSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const { data } = await mutateAsync(editeForm)

        if(data?.length){
            setStorage("login",data[0])
            setEditeUser(false)
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
                    <input type="submit" value="Edite" className="bg-blue-500 text-white font-bold p-3" />
                </form>
            </div>
        </div>
    )

    return ReactDOM.createPortal(ui, document.body)
}

export default EditeUser