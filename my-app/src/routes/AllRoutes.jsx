import { Route, Routes } from 'react-router-dom'
import CheckerPage from '../pages/CheckerPage'
import LandingPage from '../pages/LandingPage'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />}  ></Route>
            <Route path='/checker' element={<CheckerPage />}  ></Route>
        </Routes>
    )
}

export default AllRoutes