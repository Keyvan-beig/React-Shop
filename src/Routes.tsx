import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import BasketCart from "./pages/basketCart/BasketCart"
import IndexHome from "./pages/home/IndexHome"

const Routes = ()=>{
    let roters = useRoutes([
        {
            path : "/",
            element : <Home/>,
            children : [
                {
                    index : true,
                    element : <IndexHome/>
                },
                {
                    path : "/basket",
                    element : <BasketCart/>
                }
                
            ]
        }
    ])

    return roters
        
}

export default Routes