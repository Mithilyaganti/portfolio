import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Mail, Folder, FileText, BookOpen } from 'react-feather';
import './DockIcon.css';

const DockIcon = ({ icon }) => {
  const navigate = useNavigate();

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Mail />;
      case 'projects':
        return <Folder />;
      case 'blog':
        return <BookOpen />;
      case 'resume':
        return <FileText />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="dock-icon"
      data-icon={icon.icon}
      onClick={() => navigate(icon.path)}
      title={icon.name}
    >
      {renderIcon(icon.icon)}
      <span className="dock-tooltip">{icon.name}</span>
    </div>
  );
};

export default DockIcon;
