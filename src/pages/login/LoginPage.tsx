import { Suspense, lazy, useState } from "react"
import StylesLogin from "../../../public/style/StylesLogin.module.css"
import LoginIn from "./LoginIn"
import { useSelector } from "react-redux"
import { commonState } from "../../redux/commonStateSlice"
import BackDropLoading from "../../components/loading/BackDropLoading"

const LazySigningUp = lazy(() => import('./SigningUp'))
const LazyAlertSnackBar = lazy(() => import('../../components/alert/AlertSnackBar'))

const LoginPage = () => {

    const [toggleForm, setToggleForm] = useState<"loginIn" | "loginUp">("loginIn")
    const commonStt = useSelector(commonState)

    return (
        <>
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
            <div className={StylesLogin.login}>
                <div className={StylesLogin.login__content}>
                    <div className={StylesLogin.login__img}>
                        <img src="https://raw.githubusercontent.com/bedimcode/responsive-login-signin-signup/b3c2eaa19d76624092bd606d28fbd616d539de92/assets/img/img-login.svg" alt="" />
                    </div>

                    <div className={StylesLogin.login__forms}>

                        {toggleForm === "loginIn" && <LoginIn setToggleForm={setToggleForm} />}

                        <Suspense fallback={<BackDropLoading />}>
                            {toggleForm === "loginUp" && <LazySigningUp setToggleForm={setToggleForm} />}
                        </Suspense>
                    </div>
                </div>
            </div>
            <Suspense fallback={<BackDropLoading />}>
                {commonStt.alert.alertShow && <LazyAlertSnackBar />}
            </Suspense>
        </>
    )
}

export default LoginPage