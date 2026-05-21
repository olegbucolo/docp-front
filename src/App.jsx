import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { HomePage } from "./pages/HomePage"
import { DepartmentsPage } from "./pages/DepartmentsPage"


function App() {

  return (
    <>
      <Routes >
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/departments" element={<DepartmentsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
