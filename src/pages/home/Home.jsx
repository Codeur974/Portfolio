import { useState, useEffect } from "react";
import SEO from "../../components/SEO";
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
      <SEO
        title=""
        description="Développeur web freelance full stack spécialisé Next.js et React. Intervention partout en France en télétravail. Création de sites web performants, applications sur mesure, e-commerce. Devis gratuit et rapide."
        keywords="développeur web freelance, développeur Next.js freelance, développeur React freelance, création site web France, développeur full stack remote, freelance JavaScript, développeur web à distance, Next.js, React, site web performant, e-commerce, développeur freelance France, télétravail développement web"
        canonical="/"
      />
      {!showIntro && <Header />}

      {showIntro ? <Intro /> : <HomePageContent />}

      {!showIntro && <Footer />}
      {!showIntro && <FloatingMenu />}
    </div>
  );
}

export default Home;
