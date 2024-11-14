import { useEffect, useState } from 'react';
import { Routes, useNavigate, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import ContactUs from './pages/ContactUs';
import { ROUTES, ACTIVE_SECTION_KEY } from './constants';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const navigate = useNavigate();

  const SECTIONS = [
    {
      id: 0,
      name: 'Home',
      path: ROUTES.HOME
    },
    {
      id: 1,
      name: 'About',
      path: ROUTES.ABOUT
    },
    {
      id: 2,
      name: 'Details',
      path: ROUTES.DETAILS
    },
    {
      id: 3,
      name: 'Contact us',
      path: ROUTES.CONTACT_US
    }
  ];

  const handleClickSection = (sectionId, path) => {
    setActiveSection(sectionId);
    localStorage.setItem(ACTIVE_SECTION_KEY, sectionId);
    navigate(path);
  }

  useEffect(() => {
    const activeSectionFromStorage = localStorage.getItem(ACTIVE_SECTION_KEY);
    if (activeSectionFromStorage) {
      setActiveSection(parseInt(activeSectionFromStorage, 10));
    }
  }, []);

  return (
    <>
      <div className='navbar'>
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`navbar-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleClickSection(section.id, section.path)}
          >
            {section.name}
          </div>
        ))}
      </div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.DETAILS} element={<Details />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </>
  )
}

export default App
