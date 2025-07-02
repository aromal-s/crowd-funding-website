
import { RouterProvider } from "react-router-dom"
import router from "./router/Router"
function App() {
  

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
