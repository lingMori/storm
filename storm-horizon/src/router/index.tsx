import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root"
import StormPlatformDocs from "../pages/Introduce";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/introduce',
    element: <StormPlatformDocs />,
  }
])

export default router;
