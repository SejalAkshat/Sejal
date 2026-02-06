import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import OurStory from './pages/OurStory';
import Moments from './pages/Moments';
import ForYou from './pages/ForYou';
import Poems from './pages/Poems';
import './App.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/poems" element={<Poems />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
