import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Pages/Landing";
import NewsDetails from "./Pages/NewsDetails";
import "./Style/Anmation.css";
import "./Style/scroll.css";

// Define routes
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Landing />
        <Footer />
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Header />
        <Footer />
      </>
    ),
  },
  {
    path: "/news/:id",
    element: (
      <>
        <Header />
        <NewsDetails /> {/* This will render when the path is "/news/:id" */}
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
