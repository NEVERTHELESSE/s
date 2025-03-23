import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";

const About = lazy(() => import("./pages/about/About"));
export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback="loading">
              <About />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
