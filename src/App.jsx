import Header from "./components/Header/Header";
import About from "./Sections/About/About";
import Coaches from "./Sections/Coaches/Coaches";
import Footer1 from "./Sections/Footer1/Footer1";
import Footer2 from "./Sections/Footer2/footer2";
import Hero from "./Sections/Hero/Hero";
import Join from "./Sections/Join/Join";
import Questions from "./Sections/Questions/Questions";
import Results from "./Sections/Results/Results";
import Results2 from "./Sections/Results2/Results2";
import StatsSection from "./Sections/StatsSection/StatsSection";
import Testimonials from "./Sections/Testimonials/Testimonials";
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
          <Questions />
          <Testimonials />
          <Join />
        </div>
      </main>
      <footer className="position-relative z-3">
        <Footer1 />
        <Footer2 />
      </footer>
    </>
  );
}

export default App;
