import { useState } from "react"
import styles from "./login.module.css"
import AlertSnackBar from "../../components/alert/AlertSnackBar"
import LoginUp from "./LoginUp"
import SigningUp from "./SigningUp"

const LoginPage = () => {

    const [toggleForm, setToggleForm] = useState("loginIn")
    
    const [showAlert, setShowAlert] = useState('')
    const [err, setErr] = useState('')

    return (
        <>
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
            <div className={styles.login}>
                <div className={styles.login__content}>
                    <div className={styles.login__img}>
                        <img src="https://raw.githubusercontent.com/bedimcode/responsive-login-signin-signup/b3c2eaa19d76624092bd606d28fbd616d539de92/assets/img/img-login.svg" alt="" />
                    </div>

                    <div className={styles.login__forms}>

                        {toggleForm === "loginIn" && <LoginUp setShowAlert={setShowAlert} setErr={setErr} setToggleForm={setToggleForm}/>}

                        {toggleForm === "loginUp" && <SigningUp setShowAlert={setShowAlert} setErr={setErr} setToggleForm={setToggleForm}/>}

                    </div>
                </div>
            </div>

            {showAlert === "success" && <AlertSnackBar type={"success"} text={"complete request successfully"} />}
            {err && <AlertSnackBar type={"error"} text={err} />}
        </>
    )
}

export default LoginPage