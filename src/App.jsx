import { ReactLenis } from "lenis/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import "lenis/dist/lenis.css";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <p className="text-center py-4 text-sm">
        &copy; {new Date().getFullYear()}.Allrights reserved.
      </p>
    </ReactLenis>
  );
};

export default App;
