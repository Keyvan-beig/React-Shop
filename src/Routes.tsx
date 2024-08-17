import { useRoutes } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
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
                    path : '/products',
                    element : <Products/>
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