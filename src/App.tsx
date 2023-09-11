import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import Article from "./pages/Articles";
import "./App.css";

export type Article1 = {
  id: number;
  title: string;
  image: string;
  resume: string;
  scenario: string;
};

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Router>
    </>
  );
}
