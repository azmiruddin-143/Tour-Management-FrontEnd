import { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"


function App() {

  return (
    // Part-1//

    <div>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>


    </div>
  )
}

export default App
