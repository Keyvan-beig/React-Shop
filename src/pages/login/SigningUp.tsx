import styles from "./login.module.css"
import { useRef, useState } from "react"
import formData from "../../utils/form/formData"
import useCreateAds from "../../hooks/form/useCreateAds"
import { Box, CircularProgress } from "@mui/material"
import useCheckUser from "../../hooks/form/useCheckUser"

interface propType {
    setShowAlert: (ShowAlert: string) => void
    setErr: (err: string) => void
    setToggleForm: (toggleForm: string) => void
}

const SigningUp: React.FC<propType> = ({ setShowAlert, setErr, setToggleForm }) => {

    const { mutateAsync } = useCreateAds("users")

    const { mutateAsync: checkUser } = useCheckUser()

    const loginUpForm = useRef<any>(null)
    const [loading, setLoading] = useState(false)

    const handelSignUp = async (e: any) => {
        e.preventDefault()

        setLoading(true)
        setShowAlert('')
        setErr('')

        const { formList } = formData(loginUpForm.current)

        const { data:check } = await checkUser(formList)

        if (check && !check.length) {
            
            const { data } = await mutateAsync(formList)
            setLoading(false)

            if (data) {
                setShowAlert('success')
                setTimeout(() => setToggleForm("loginIn"), 2000)
            } else {
                setErr("Error")
            }

        } else {
            setLoading(false)
            setErr("Error")
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

            <button type="submit" className={`${styles.login__button} flex items-center gap-2`}>
                Sign Up
                {loading &&
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20} />
                    </Box>}
            </button>
            <div>
                <span className={styles.login__account}>Already have an Account ?</span>
                <span className={styles.login__signup} onClick={() => setToggleForm("loginIn")} id="sign-in">Sign In</span>
            </div>
        </form>

    )

}

export default SigningUp