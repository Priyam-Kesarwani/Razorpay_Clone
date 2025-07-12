import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureSection1 from './components/FeatureSection1.jsx'
import FeatureSection2 from './components/FeatureSection2.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <HeroSection />
    <FeatureSection1 />
    <FeatureSection2 />
  </div>
)
