import Header from "./components/Header/Header";
import About from "./Sections/About/About";
import Coaches from "./Sections/Coaches/Coaches";
import Hero from "./Sections/Hero/Hero";
import Results from "./Sections/Results/Results";
import Results2 from "./Sections/Results2/Results2";
import StatsSection from "./Sections/StatsSection/StatsSection";
import WhyUs from "./Sections/WhyUs/WhyUs";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <div className="main-content position-relative z-3 overflow-hidden">
          <About />
          <Results />
          <StatsSection />
          <Results2 />
          <WhyUs />
          <Coaches />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
