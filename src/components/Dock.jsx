import React from 'react';
import DockIcon from './DockIcon';
import './Dock.css';
import ThemeToggleDock from './ThemeToggleDock';

const Dock = () => {
  const icons = [
    { id: 1, name: 'Home', path: '/', icon: 'home' },
    { id: 2, name: 'Contact', path: '/contact', icon: 'contact' },
    { id: 3, name: 'Projects', path: '/projects', icon: 'projects' },
    { id: 4, name: 'Blog', path: '/blog', icon: 'blog' },
    { id: 5, name: 'Resume', path: '/resume', icon: 'resume' }
  ];

  return (
    <div className="dock-container">
      <div className="dock">
        {icons.map(icon => (
          <DockIcon key={icon.id} icon={icon} />
        ))}
      </div>
      <ThemeToggleDock />
    </div>
  );
};

export default Dock;
