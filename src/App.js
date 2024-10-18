import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AssuntosDestaque from './components/assuntos/AssuntosDestaque';
import EducationalCards from './components/cards/EducationalCards';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
       <>
       <Header/>
       <Hero/>
       <AssuntosDestaque/>
       <EducationalCards/>
       <Newsletter/>
       <Footer/>
       </>
    </div>
  );
}

export default App;
