import { Route, Routes } from "react-router-dom"
import Browse from "./Browse"

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={ <Browse /> } />
      </Routes>
    </div>
  )
}

export default Body