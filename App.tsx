import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen text-neutral-900 dark:text-neutral-200 selection:bg-accent selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        <CursorGlow />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;