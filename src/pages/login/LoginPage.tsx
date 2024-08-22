import { useRef, useState } from "react"
import styles from "./login.module.css"
import AlertSnackBar from "../../components/AlertSnackBar"
import { Box, CircularProgress } from "@mui/material"
import useLogin from "../../hooks/products/loginPage/useLogin"
import useSignUp from "../../hooks/products/loginPage/useSignUp"

const LoginPage = () => {

    const [toggleForm, setToggleForm] = useState("loginIn")
    const loginInForm = useRef<any>(null)
    const loginUpForm = useRef<any>(null)
    const [loading, setLoading] = useState(false)
    const [showAlert, setShowAlert] = useState('')
    const [error, setError] = useState('')

    const { fetchData } = useLogin(setLoading, setShowAlert, setError)
    const { postData } = useSignUp(setLoading, setShowAlert, setToggleForm, setError)

    const handelSubmit = (e: any) => {
        e.preventDefault()
        fetchData(loginInForm.current)
    }

    const loginUpFun = (e: any) => {
        e.preventDefault()
        postData(loginUpForm.current)
    }

    return (
        <>
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
            <div className={styles.login}>
                <div className={styles.login__content}>
                    <div className={styles.login__img}>
                        <img src="https://raw.githubusercontent.com/bedimcode/responsive-login-signin-signup/b3c2eaa19d76624092bd606d28fbd616d539de92/assets/img/img-login.svg" alt="" />
                    </div>

                    <div className={styles.login__forms}>
                        {toggleForm === "loginIn" &&
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
                        }

                        {toggleForm === "loginUp" &&
                            <form onSubmit={loginUpFun} className={styles.login__create} id="login-up" ref={loginUpForm}>
                                <h1 className={styles.login__title}>Create Account</h1>

                                <div className={styles.login__box}>
                                    <input name="phone" type="phone" placeholder="Phone" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input name="password" type="password" placeholder="password" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input name="city" type="text" placeholder="City" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
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
                        }
                    </div>
                </div>
            </div>

            {showAlert === "success" && <AlertSnackBar setShowAlert={setShowAlert} type={"success"} text={"login successfully"} />}
            {showAlert === "error" && <AlertSnackBar setShowAlert={setShowAlert} type={"error"} text={"user not found"} />}
            {error && <AlertSnackBar setShowAlert={setError} type={"error"} text={error} />}


        </>
    )
}

export default LoginPage