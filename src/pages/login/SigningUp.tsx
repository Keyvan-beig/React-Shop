import styles from "./login.module.css"
import { FormEvent, useRef } from "react"
import formData from "../../utils/form/formData"
import useCreateAds from "../../hooks/form/useCreateAds"
import useCheckUser from "../../hooks/form/useCheckUser"
import { useDispatch } from "react-redux"
import { alerShowSet, alertTypeSet, loadingSet } from "../../redux/commonStateSlice"
import LoadingBottom from "../../components/bottom/LodingBottom"

interface propType {
    setToggleForm: (toggleForm: "loginIn" | "loginUp") => void
}

const SigningUp: React.FC<propType> = ({ setToggleForm }) => {

    const { mutateAsync } = useCreateAds("users")
    const { mutateAsync: checkUser } = useCheckUser()
    const dispatch = useDispatch()

    const loginUpForm = useRef<any>(null)

    const handelSignUp = async (e: FormEvent) => {
        e.preventDefault()

        dispatch(loadingSet(true))

        const { formList } = formData(loginUpForm.current)

        const { data: check } = await checkUser(formList)

        

        if (check && !check.length) {

            const { data } = await mutateAsync(formList)

            dispatch(loadingSet(false))

            if (data) {
                dispatch(alerShowSet(true))
                dispatch(alertTypeSet('success'))
                setTimeout(()=> setToggleForm("loginIn"),4000)
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
        <form onSubmit={handelSignUp} className={styles.login__create} id="login-up" ref={loginUpForm}>
            <h1 className={styles.login__title}>Create Account</h1>

            <div className={styles.loginUp__box}>
                <input name="fullName" type="text" placeholder="Full Name" className={styles.login__input} />
            </div>

            <div className={styles.loginUp__box}>
                <input name="phone" type="phone" placeholder="Phone" className={styles.login__input} />
            </div>

            <div className={styles.loginUp__box}>
                <input name="password" type="password" placeholder="password" className={styles.login__input} />
            </div>

            <div className={styles.loginUp__box}>
                <input name="city" type="text" placeholder="City" className={styles.login__input} />
            </div>

            <div className={styles.loginUp__box}>
                <input name="address" type="text" placeholder="Address" className={styles.login__input} />
            </div>
            <LoadingBottom text={"Sign Up"} className={null}/>
            <div>
                <span className={styles.login__account}>Already have an Account ?</span>
                <span className={styles.login__signup} onClick={() => setToggleForm("loginIn")} id="sign-in">Sign In</span>
            </div>
        </form>
    )

}

export default SigningUp