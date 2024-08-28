import StylesLogin from "../../../public/style/StylesLogin.module.css"
import { FormEvent, useRef } from "react"
import formData from "../../utils/form/formData"
import useCreateAds from "../../hooks/form/useCreateAds"
import useCheckUser from "../../hooks/form/useCheckUser"
import { useDispatch } from "react-redux"
import { alerShowSet, alertTypeSet, loadingSet } from "../../redux/commonStateSlice"
import LoadingBottom from "../../components/bottom/LodingBottom"
import PhoneInput from "../../components/inputs/PhoneInput"
import PassInput from "../../components/inputs/PassInput"
import Input from "../../components/inputs/Input"
import validationForm from "../../utils/form/validationForm"

interface propType {
    setToggleForm: (toggleForm: "loginIn" | "loginUp") => void
}

const SigningUp: React.FC<propType> = ({ setToggleForm }) => {

    const { mutateAsync } = useCreateAds("users")
    const { mutateAsync: checkUser } = useCheckUser()
    const dispatch = useDispatch()
    const { phoneInput, passwordInput } = validationForm()

    const loginUpForm = useRef<any>(null)

    const handelSignUp = async (e: FormEvent) => {
        e.preventDefault()
        const { formList } = formData(loginUpForm.current)
        if (phoneInput(formList.phone) && passwordInput(formList.password)) {

            dispatch(loadingSet(true))

            const { data: check } = await checkUser(formList.phone)

            if (check && !check.length) {
                const { data } = await mutateAsync(formList)
                dispatch(loadingSet(false))
                if (data) {
                    dispatch(alerShowSet(true))
                    dispatch(alertTypeSet('success'))
                    setTimeout(() => setToggleForm("loginIn"), 4000)
                } else {
                    dispatch(alerShowSet(true))
                    dispatch(alertTypeSet('error'))
                }
            } else {
                dispatch(loadingSet(false))
                dispatch(alerShowSet(true))
                dispatch(alertTypeSet('error'))
            }
        }
    }

    return (
        <form
            onSubmit={handelSignUp}
            className={`${StylesLogin.login__create} grid gap-3`}
            id="login-up"
            ref={loginUpForm}
        >
            <h1 className={StylesLogin.login__title}>Create Account</h1>

            <Input placeholder={"fullName"} classes={null} />

            <PhoneInput />

            <PassInput />

            <Input placeholder={"city"} classes={null} />

            <Input placeholder={"address"} classes={null} />

            <LoadingBottom text={"Sign Up"} className={null} />

            <div>
                <span className={StylesLogin.login__account}>
                    Already have an Account ?
                </span>
                <span
                    className={StylesLogin.login__signup}
                    onClick={() => setToggleForm("loginIn")}
                    id="sign-in"
                >
                    Login
                </span>
            </div>
        </form>
    )

}

export default SigningUp