import React from "react"
import { AppUi } from "./AppUi"
import { Provider } from "../contex"
function App() {
  return (
    <Provider>
      <AppUi/>
    </Provider>
  )
}
export { App }
