import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const Home: React.FC = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home