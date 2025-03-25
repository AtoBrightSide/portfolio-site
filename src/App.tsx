import 'animate.css';
import { Connect } from "./components/Connect";
import { Footer } from "./components/Footer";
import { Herosection } from "./components/Herosection";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div className="flex-col bg-[#D9D8D7] text-[#5C7356] w-full p-0 m-0 scroll-smooth">
      <Navbar />

      <Herosection />

      <Projects />

      <Connect />

      <Footer />

    </div>
  );
}

export default App;
