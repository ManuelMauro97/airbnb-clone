import { Route, Routes } from "react-router-dom"
import { AirbnbRoutes } from "../airbnb/routes/AirbnbRoutes"


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/*" element={ <AirbnbRoutes /> } />


    </Routes>
  )
}
