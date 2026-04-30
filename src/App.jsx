import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import TheParable from "./pages/TheParable";
import Devotion from "./pages/Devotion";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Links from "./pages/Links";
import "./styles/global.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout({ children }) {
  const { pathname } = useLocation();
  const isLinksPage = pathname === "/links";

  return (
    <>
      <ScrollToTop />
      {!isLinksPage && <Nav />}
      {children}
      {!isLinksPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/the-parable" element={<TheParable />} />
          <Route path="/devotion" element={<Devotion />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
