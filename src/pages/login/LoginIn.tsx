import styles from "./login.module.css"
import { FormEvent, useRef } from "react"
import useCheckUser from "../../hooks/form/useCheckUser"
import formData from "../../utils/form/formData"
import setStorage from "../../utils/storage/setStorage"
import { useNavigate } from "react-router-dom"
import { alerShowSet, alertTypeSet, loadingSet } from "../../redux/commonStateSlice"
import LoadingBottom from "../../components/bottom/LodingBottom"
import { useDispatch } from "react-redux"
import validationForm from "../../utils/form/validationForm"
import PhoneInput from "../../components/inputs/PhoneInput"
import PassInput from "../../components/inputs/PassInput"

interface propType {
    setToggleForm: (toggleForm: "loginIn" | "loginUp") => void
}

const LoginIn: React.FC<propType> = ({ setToggleForm }) => {

    const loginInForm = useRef<any>()
    const { mutateAsync } = useCheckUser()
    const navigat = useNavigate()
    const dispatch = useDispatch()
    const { phoneInput, passwordInput } = validationForm()

    const handelSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const { formList } = formData(loginInForm.current)

        if (phoneInput(formList.phone) && passwordInput(formList.password)) {

            dispatch(loadingSet(true))

            const { data } = await mutateAsync(formList.phone)

            dispatch(loadingSet(false))

            if (data?.length) {
                if (data[0]?.password === formList?.password) {
                    const storage = {
                        fullName: data[0].fullName,
                        city: data[0].city,
                        address: data[0].address,
                        phone: data[0].phone
                    }
                    setStorage("login", storage)
                    dispatch(alerShowSet(true))
                    dispatch(alertTypeSet('success'))
                    setTimeout(() => navigat('/'), 4000)
                } else {
                    dispatch(alerShowSet(true))
                    dispatch(alertTypeSet('error'))
                }
            } else {
                dispatch(alerShowSet(true))
                dispatch(alertTypeSet('error'))
            }
        }
    }

    return (
        <form onSubmit={handelSubmit} className={`${styles.login__registre} grid gap-3 `} id="login-in" ref={loginInForm}>
            <h1 className={styles.login__title}>Sign In</h1>
            <PhoneInput />
            <PassInput />
            <LoadingBottom text={'Login'} className={null} />
            <div>
                <span
                    className={styles.login__account}
                >
                    Don't have an Account ?
                </span>
                <span
                    className={styles.login__signin}
                    onClick={() => setToggleForm("loginUp")}
                    id="sign-up">
                    Sign Up
                </span>
            </div>
        </form>
    )

}

export default LoginIn