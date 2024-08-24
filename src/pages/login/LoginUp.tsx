import styles from "./login.module.css"
import { useRef, useState } from "react"
import useCheckUser from "../../hooks/form/useCheckUser"
import formData from "../../utils/form/formData"
import { Box, CircularProgress } from "@mui/material"
import setStorage from "../../utils/storage/setStorage"
import { useNavigate } from "react-router-dom"

interface propType {
    setShowAlert: (ShowAlert: string) => void
    setErr: (err: string) => void
    setToggleForm: (toggleForm: string) => void
}

const LoginUp: React.FC<propType> = ({ setShowAlert, setErr, setToggleForm }) => {

    const loginInForm = useRef<any>(null)
    const [loading, setLoading] = useState(false)
    const { mutateAsync } = useCheckUser()
    const navigat = useNavigate()

    const handelSubmit = async (e: any) => {
        e.preventDefault()

        setLoading(true)
        setShowAlert('')
        setErr('')

        const { formList } = formData(loginInForm.current)
        const { data } = await mutateAsync(formList)

        setLoading(false)

        if (data?.length) {
            if (data[0]?.password === formList?.password) {

                setStorage("login", data[0])
                setShowAlert('success')
                setTimeout(() => navigat('/'), 3000)
            } else {
                setErr("Error")
            }
        } else {
            setErr("Error")
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

            <button type="submit" disabled={loading} className={`${styles.login__button} flex items-center gap-2`}>
                Sign In
                {loading &&
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20} />
                    </Box>}
            </button>
            <div>
                <span className={styles.login__account}>Don't have an Account ?</span>
                <span className={styles.login__signin} onClick={() => setToggleForm("loginUp")} id="sign-up">Sign Up</span>
            </div>
        </form>
    )

}

export default LoginUp