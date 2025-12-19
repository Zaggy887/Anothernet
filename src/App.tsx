import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollReset } from './components/ScrollReset';
import { PageTransition } from './components/PageTransition';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CapitalRaisingPage } from './pages/services/CapitalRaisingPage';
import { MAAdvisoryPage } from './pages/services/MAAdvisoryPage';
import { PartnershipsPage } from './pages/services/PartnershipsPage';
import { MarketEntryPage } from './pages/services/MarketEntryPage';

function App() {
  return (
    <Router>
      <ScrollReset />
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageTransition>
          <div className="flex-1 flex flex-col">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/capital-raising" element={<CapitalRaisingPage />} />
                <Route path="/services/ma-advisory" element={<MAAdvisoryPage />} />
                <Route path="/services/partnerships" element={<PartnershipsPage />} />
                <Route path="/services/market-entry" element={<MarketEntryPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </PageTransition>
      </div>
    </Router>
  );
}

export default App;
