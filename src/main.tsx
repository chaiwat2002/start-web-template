import App from "@src/App"
import { future } from "@src/config/router"
import "@src/index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter future={future}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
