import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Para roteamento
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AssuntosDestaque from './components/assuntos/AssuntosDestaque';
import EducationalCards from './components/cards/EducationalCards';
import LatestBlogs from './components/latest/LatestBlogs';
import Testimonials from './components/testimonials/Testimonials';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
 // Página de redirecionamento dos cards
import MathContent from './pages/MathContent'
import PhysicsContent from './pages/PhysicsContent';
import ChemistryContent from './pages/ChemistryContent';
import HistoryContent from './pages/HistoryContent';
import GeographyContent from './pages/GeographyContent';
import BiologyContent from './pages/BiologyContent';
import LiteratureContent from './pages/LiteratureContent';
import SociologyContent from './pages/SociologyContent';
import PhilosophyContent from './pages/PhilosophyContent';
// redirecionamento das visitas
import OceanographyVisit from './pages/OceanographyVisit';
import MarineDay from './pages/MarineDay';
import CareerFair from './pages/CareerFair';
// npm install @fortawesome/fontawesome-free
// npm install react-slick slick-carousel
// npm install react-router-dom

function App() {
  return (
    <Router>
      <Header /> {/* O Header deve estar fora das rotas para que apareça em todas as páginas */}
      
      <Routes>
        {/* Página inicial com todos os componentes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AssuntosDestaque />
              <EducationalCards />
              <LatestBlogs />
              <Testimonials />
              <Newsletter />
            </>
          }
        />
        
        {/* Rota para a página de conteúdo dos cards */}
        <Route path="/matematica" element={<MathContent />} />
        <Route path='/fisica' element={<PhysicsContent />}/>
        <Route path='/quimica' element={<ChemistryContent />}/>
        <Route path='/historia' element={<HistoryContent />}/>
        <Route path='/geografia' element={<GeographyContent />} />
        <Route path='/biologia' element={<BiologyContent />} />
        <Route path='/literatura' element={<LiteratureContent />} />
        <Route path='/sociologia' element={<SociologyContent />} />
        <Route path='/filosofia' element={<PhilosophyContent />} />

        {/* redirecionamento dos cards de visitas */}
        <Route path='/oceanography-visit' element={<OceanographyVisit />} />
        <Route path='/marine-day' element={<MarineDay />} />
        <Route path='/career-fair' element={<CareerFair />} />

      </Routes>

      <Footer /> {/* O Footer deve estar aqui, fora do Routes */}
    </Router>
  );
}

export default App;
