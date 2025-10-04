import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import BooyahBanner from './components/BooyahBanner';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <EventDetails />
      <BooyahBanner />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
