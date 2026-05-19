import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="font-inter antialiased bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Projects />
        <Process />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
