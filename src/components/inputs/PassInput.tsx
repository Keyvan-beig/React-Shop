import { useState } from "react"
import validationForm from "../../utils/form/validationForm"

const PassInput = () => {

    const [validate, setValidate] = useState(true)
    const {passwordInput} = validationForm()

    const handelValidate = (e: any) => {
        const check = passwordInput(e.target.value)
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
                name="password"
                type="password"
                placeholder="Password"
                className="w-[100%] outline-none"
                onChange={handelValidate}
            />
        </div>
    )

}

export default PassInput