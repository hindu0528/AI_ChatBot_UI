// Container.jsx
import { useState, useEffect } from 'react';
import HistoryTracking from './HistoryTracking';
import Main from './Main';
import styles from './Container.module.css';
import { FaBars } from 'react-icons/fa';

const Container = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={styles.container}>
      {!isMobile && !isMobileOpen && (
      <div className={styles.sidebarContainer}>
      
        <HistoryTracking />
      </div>
    )}
      <div className={styles.mainContainer}>
        <Main />
        {isMobile && (
          <button className={styles.toggleButton} onClick={toggleMobileSidebar}>
            <FaBars />
          </button>
        )}
      </div>
      {isMobile && isMobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.sidebarContainer}>
            <HistoryTracking />
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;