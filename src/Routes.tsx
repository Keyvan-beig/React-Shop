import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import IndexHome from "./pages/home/IndexHome"
import LoginPage from "./pages/login/LoginPage"

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