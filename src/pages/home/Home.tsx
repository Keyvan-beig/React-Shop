import { Outlet } from "react-router-dom"
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import { useSelector } from "react-redux"
import { commonState } from "../../redux/commonStateSlice"
import { Suspense, lazy } from "react"
import BackDropLoading from "../../components/loading/BackDropLoading"
const LazyAlertSnackBar = lazy(() => import('../../components/alert/AlertSnackBar'))

const Home: React.FC = () => {

    const states = useSelector(commonState)

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

            <Suspense fallback={<BackDropLoading />}>
                {states.alert.alertShow && <LazyAlertSnackBar />}
            </Suspense>
        </>
    )
}

export default Home