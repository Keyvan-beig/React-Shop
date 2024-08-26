import { Outlet } from "react-router-dom"
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import { useSelector } from "react-redux"
import { commonState } from "../../redux/commonStateSlice"
import AlertSnackBar from "../../components/alert/AlertSnackBar"

const Home: React.FC = () => {

    const states = useSelector(commonState)

    return (
        <>
            <Header />
            <Outlet />
            <Footer/>

            {states.alert.alertShow && <AlertSnackBar/>}
        </>
    )
}

export default Home