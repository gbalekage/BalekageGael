import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Service from "./components/services/Service";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
