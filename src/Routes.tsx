import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import LoginPage from "./pages/login/LoginPage"
import { lazy } from "react"
const IndexHome = lazy(()=>import('./pages/home/IndexHome'))

const Routes = () => {
    let roters = useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <IndexHome />
                }
            ]
        },
        {
            path: '/login',
            element : <LoginPage/>
        }
    ])

    return roters

}

export default Routes