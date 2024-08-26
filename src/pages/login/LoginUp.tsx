import styles from "./login.module.css"
import { FormEvent, useRef } from "react"
import useCheckUser from "../../hooks/form/useCheckUser"
import formData from "../../utils/form/formData"
import setStorage from "../../utils/storage/setStorage"
import { useNavigate } from "react-router-dom"
import { alerShowSet, alertTypeSet, errorSet, loadingSet } from "../../redux/commonStateSlice"
import LoadingBottom from "../../components/bottom/LodingBottom"
import { useDispatch } from "react-redux"

interface propType {
    setToggleForm: (toggleForm: "loginIn" | "loginUp") => void
}

const LoginUp: React.FC<propType> = ({ setToggleForm }) => {

    const loginInForm = useRef<any>()
    const { mutateAsync } = useCheckUser()
    const navigat = useNavigate()
    const dispatch = useDispatch()

    const handelSubmit = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(loadingSet(true))

        const { formList } = formData(loginInForm.current)
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

    return (
        <form onSubmit={handelSubmit} className={styles.login__registre} id="login-in" ref={loginInForm}>
            <h1 className={styles.login__title}>Sign In</h1>

            <div className={styles.login__box}>
                <input name="phone" type={styles.text} placeholder="Phone" className={styles.login__input} />
            </div>

            <div className={styles.login__box}>
                <input name="password" type="password" placeholder="Password" className="login__input outline-none" />
            </div>
            <LoadingBottom text={'SignIn'} className={null} />
            <div>
                <span className={styles.login__account}>Don't have an Account ?</span>
                <span className={styles.login__signin} onClick={() => setToggleForm("loginUp")} id="sign-up">Sign Up</span>
            </div>
        </form>
    )

}

export default LoginUp