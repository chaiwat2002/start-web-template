import { Path } from "@src/config/path"
import { Home } from "@src/routes/Home"
import { NotFound } from "@src/routes/NotFound"
import { Route, Routes } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App
