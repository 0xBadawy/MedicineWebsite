import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Pages/Landing";
import NewsDetails from "./Pages/NewsDetails";
import "./Style/Anmation.css";
import "./Style/scroll.css";

function App() {
  return (
    <>
      <Header />
      <Landing />
      {/* <NewsDetails /> */}
      {/* <div className="h-screen"></div> */}
      <Footer />
    </>
  );
}

export default App;
