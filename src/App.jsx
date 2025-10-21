import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/Categories";
import './App.css';
import logo from './assets/images/thinkboard-logo.png';
import homeIcon from './assets/images/house-icon.png';
import homeActiveIcon from './assets/images/house-icon-active.png';
import categoriesIcon from './assets/images/categories.png';
import categoriesActiveIcon from './assets/images/categories-active.png';
import ideasIcon from './assets/images/my-ideas.png';
import ideasActiveIcon from './assets/images/my-ideas-active.png';
import plusSimbol from  './assets/images/plus-simbol.png';
import FeedbackForm from "./components/FeedbackForm";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import aboutUsIcon from './assets/images/aboutUs.png';
import aboutUsIconActive from './assets/images/aboutUs-active.png';

export const getCategories = (t) => 
[
      { value: "Organização", label: t('Cards.categories.organization') },
      { value: "performance", label: "performance" },
      { value: "bug", label: t('Cards.categories.bug') },
      { value: "idea", label: t('Cards.categories.idea') },
      { value: "design", label: t('Cards.categories.design') },
      { value: "feature", label: t('Cards.categories.feature') },
      { value: "feedback", label: t('Cards.categories.feedback') },
];

  


const App = () => {
  const { t, i18n } = useTranslation();
  const [feedbacks, setFeedbacks] = useState([
    // exemplos iniciais (opcional)
    {
      id: 1,
      title: "Automatização de relatórios de desempenho mensal",
      message: `Hoje, a comunicação entre equipes é fragmentada: feedbacks sobre projetos, processos e resultados ficam espalhados por e-mails e chats...`,
      category: "Organização",
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: "Exemplo de ideia",
      message: "Outro texto de teste",
      category: "performance",
      date: new Date().toLocaleDateString()
    }
  ]);

  const addFeedback = (newFeedback) => {
    const toAdd = { ...newFeedback, id: Date.now() };
    setFeedbacks(prev => [toAdd, ...prev]);
  };

  const [showForm, setShowForm] = useState(false);

  const menuItems = [
    { id: 'home', label: t('Menu.home'), icon: homeIcon, activeIcon: homeActiveIcon, path: '/' },
    { id: 'categories', label: t('Menu.categories'), icon: categoriesIcon, activeIcon: categoriesActiveIcon, path: '/categories' },
    { id: 'ideas', label: t('Menu.ideas'), icon: ideasIcon, activeIcon: ideasActiveIcon, path: '/ideas' },
    { id: 'aboutUs', label: t('Menu.aboutUs'), icon: aboutUsIcon, activeIcon: aboutUsIconActive, path: '/aboutUs' },
  ];

  function SubmittingButton({ onClick }) {
    return (
      <button onClick={onClick} className="submittingButton">
        <img src={plusSimbol} alt="add-simbol" />
        <span className="tooltip-text">{t('Menu.addIdea')}</span>
      </button>
    );
  }

  return (
    <div className="app-layout">
      <div className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>

            </li>
          ))}
        </ul>
          <div className = "sidebar-button">
            <LanguageSwitcher />
          </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FeedbackForm handleAdd={addFeedback} />
          </div>
        </div>
      )}

      <div className="main-content">
        <div className="navbar">
          
          <img src={logo} alt="ThinkBoard Logo" />
          <SubmittingButton onClick={() => setShowForm(true)} />
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home feedbacks={feedbacks} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;



