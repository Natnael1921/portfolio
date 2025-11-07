import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWorks from "./pages/MyWorks";
import Contact from "./pages/Contact";
import { initAOS } from "./utils/initAOS";
import { useEffect } from "react";
function App() {
   useEffect(() => {
    initAOS();
  }, []);
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <MyWorks />
      <Contact />
    </>
  );
}

export default App;
