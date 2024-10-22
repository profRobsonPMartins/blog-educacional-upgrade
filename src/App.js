
// Import de HOOKS e Bibliotecas ou ferramentas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Conteudo Principal
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AssuntosDestaque from './components/assuntos/AssuntosDestaque';
import EducationalCards from './components/cards/EducationalCards';
import Testimonials from './components/testimonials/Testimonials';
import LatestBlogs from './components/latest/LatestBlogs';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

// Conteudo de redirecionamento
import MathContent from './components/pages/MathContent';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/'
          element={
            <>
              <Hero />
              <AssuntosDestaque />
              <EducationalCards />
              <Testimonials />
              <LatestBlogs/>
              <Newsletter />
            </>
          } />
        <Route path="/matematica" element={<MathContent />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
