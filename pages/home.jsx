// pages/index.jsx
import Navbar from './homepage/components/navbar';
import Hero from './homepage/components/hero';
import AboutUs from './homepage/components/aboutus';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero></Hero>
        <AboutUs></AboutUs>
        <section id="events" className="py-8">Events section</section>
        <section id="gallery" className="py-8">Gallery Section</section>
        <section id="magazine1" className="py-8">Magazine 1 Section</section>
        <section id="magazine2" className="py-8">Magazine 2 Section</section>
      </main>
    </>
  );
};

export default Home;