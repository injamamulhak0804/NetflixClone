import Login from "./Login"
import Browse from "./Browse"
import { Route, Routes } from "react-router-dom"

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/browse" element={<Browse />} />
      </Routes>
    </div>
  )
}

export default Body