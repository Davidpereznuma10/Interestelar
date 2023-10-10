import React from "react"
import { LoginUi } from "./Views/LoginUI"
import { HomeUi } from "./Views/HomeUi"
import { VideoUi } from "./Views/videosUI.jsx"
import { Provider } from "../contex"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<LoginUi />} />
          <Route path="/Home" element={<HomeUi />} />
          <Route path="/Multimedia" element={<LoginUi />} />
          <Route path="/Multimedia/:courseName" element={<VideoUi />} />
        </Routes>
      </Provider>
    </>
  )
}

export { App }
