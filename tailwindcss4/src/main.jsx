import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Information from './Information.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Information />
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <App />
  </StrictMode>,
)
