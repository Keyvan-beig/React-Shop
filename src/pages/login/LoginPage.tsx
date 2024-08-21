import { useState } from "react"
import styles from "./login.module.css"

const LoginPage = () => {

    const [toggleForm, setToggleForm] = useState("loginIn")

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
                            <form action="" className={styles.login__registre} id="login-in">
                                <h1 className={styles.login__title}>Sign In</h1>

                                <div className={styles.login__box}>
                                    <input type={styles.text} placeholder="Phone" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input type="password" placeholder="Password" className="login__input outline-none" />
                                </div>

                                <a href="#" className={styles.login__button}>Sign In</a>

                                <div>
                                    <span className={styles.login__account}>Don't have an Account ?</span>
                                    <span className={styles.login__signin} onClick={() => setToggleForm("loginUp")} id="sign-up">Sign Up</span>
                                </div>
                            </form>
                        }

                        {toggleForm === "loginUp" &&
                            <form action="" className={styles.login__create} id="login-up">
                                <h1 className={styles.login__title}>Create Account</h1>

                                <div className={styles.login__box}>
                                    <input type="phone" placeholder="Phone" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input type="password" placeholder="password" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input type="text" placeholder="City" className={styles.login__input} />
                                </div>

                                <div className={styles.login__box}>
                                    <input type="text" placeholder="Address" className={styles.login__input} />
                                </div>

                                <a href="#" className={styles.login__button}>Sign Up</a>

                                <div>
                                    <span className={styles.login__account}>Already have an Account ?</span>
                                    <span className={styles.login__signup} onClick={() => setToggleForm("loginIn")} id="sign-in">Sign In</span>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage