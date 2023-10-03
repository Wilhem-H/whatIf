import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import Article from "./pages/Articles";
import Contact from "./pages/Contact";
import { Footer } from "./components/Footer.tsx";

import "./App.css";

export type Article1 = {
  id: number;
  title: string;
  image: string;
  image2?: string;
  resume: string;
  scenario: string;
  acteI?: string;
  acteII?: string;
  acteIII?: string;
  conclusion?: string;
};

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
