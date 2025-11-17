import { useState, useEffect } from "react";
import Intro from "../../components/intro/Intro";
import HomePageContent from "../../components/homePageContent/HomePageContent";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FloatingMenu from "../../components/floatingMenu/FloatingMenu";
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
      {!showIntro && <Header />}

      {showIntro ? <Intro /> : <HomePageContent />}

      {!showIntro && <Footer />}
      {!showIntro && <FloatingMenu />}
    </div>
  );
}

export default Home;
