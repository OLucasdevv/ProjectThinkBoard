import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Ideas from "./pages/Ideas";
import AboutUs from "./pages/AboutUs";

import './App.css';

import logo from './assets/images/thinkboard-logo.png';
import homeIcon from './assets/images/house-icon.png';
import homeActiveIcon from './assets/images/house-icon-active.png';
import categoriesIcon from './assets/images/categories.png';
import categoriesActiveIcon from './assets/images/categories-active.png';
import ideasIcon from './assets/images/my-ideas.png';
import ideasActiveIcon from './assets/images/my-ideas-active.png';


const App = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, title: "title text", text: "subject text", category: "organization"},
    { id: 2, title: "title text", text: "another test text", category: "performance"},
    
  ]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const menuItems = [
    { id: 'home', label: 'Página Inicial', icon: homeIcon, activeIcon: homeActiveIcon, path: '/' },
    { id: 'categories', label: 'Categorias', icon: categoriesIcon, activeIcon: categoriesActiveIcon, path: '/categories' },
    { id: 'ideas', label: 'Minhas Ideias', icon: ideasIcon, activeIcon: ideasActiveIcon, path: '/ideas' },
    { id: 'aboutUs', label: 'Sobre o ThinkBoard', icon: ideasIcon, activeIcon: ideasActiveIcon, path: '/aboutUs' },
  ];

  return (
    <div className="app-layout">
      {/* Sidebar */}
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
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="navbar">

          
          <img src = "" />    {/* foto de perfil */}     
          <img src={logo} alt="ThinkBoard Logo" />
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home feedbacks={feedbacks} handleAdd={addFeedback} />} />
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
