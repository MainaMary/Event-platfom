import AllRoutes from "./routes/AllRoutes"
import { Suspense } from "react"

function App() {

  return (
    <Suspense fallback="loading..">
      <AllRoutes/>
    </Suspense>
  )
}

export default App
