import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/Layout/AppLayout"
import { ErrorPage } from "./components/UI/ErrorPage"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Country } from "./Pages/Country"
import { Contact } from "./Pages/Contact"
import { CountryDetails } from "./Pages/CountryDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/country",
        element: <Country/>
      },
      { // colon indicates that it is dynamic roots.
        path: "/country/:id",
        element: <CountryDetails/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} > </RouterProvider>
}

export default App
