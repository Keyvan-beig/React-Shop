import { useState } from "react"
import validationForm from "../../utils/form/validationForm"

const PhoneInput = (className: any) => {

    const [validate, setValidate] = useState(true)
    const { phoneInput } = validationForm()

    const handelValidate = (e: any) => {
        const check = phoneInput(e.target.value)
        setValidate(check)
    }

    return (
        <div className={`
            w-full
          bg-white 
            p-3 
            rounded-lg
            outline-red-700
            ${validate ? "" : 'border border-red-500'}
            `}>
            <input
                name="phone"
                type="text"
                placeholder="Phone"
                className={`
            ${className}
            bg-white
            outline-none
            w-[100%]
            `}
                onChange={handelValidate}
            />
        </div>
    )

}

export default PhoneInput