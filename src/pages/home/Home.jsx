import { useState, useEffect } from "react";
import Intro from "../../components/intro/Intro";
import HomePageContent from "../../components/homePageContent/HomePageContent";
import Header from "../../components/header/Header";
function Home() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showIntro && <Header />}{" "}
      {/* Affiche le Header uniquement si Intro est caché */}
      {showIntro ? <Intro /> : <HomePageContent />}
    </div>
  );
}

export default Home;
