import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import MainContent from "./components/MainContent/MainContent";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(TimeOut);
  }, []);
  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loader key={"loader"} />
        ) : (
          <MainContent key={"mainContent"} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
