import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { 
  FaChevronDown, 
  FaBars, 
  FaTimes, 
  FaSearch,
  FaRegUser
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    {
      title: 'Products',
      items: [
        {
          title: 'Math Solver',
          description: 'Advanced AI for solving mathematical problems',
          icon: '📐'
        },
        {
          title: 'Step-by-Step Solutions',
          description: 'Detailed explanations for every problem',
          icon: '📝'
        },
        {
          title: 'Practice Problems',
          description: 'Interactive exercises for better learning',
          icon: '✏️'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Track your progress and improvement',
          icon: '📊'
        }
      ]
    },
    { title: 'Solutions' },
    { title: 'Resources' },
    { title: 'Pricing' }
  ];

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.headerContent}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logo}>
          <img src={logo} alt="Math Solver AI" className={styles.logoImage} />
            <span className={styles.logoText}>Math Solver AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className={styles.desktopNav}>
          {navigationLinks.map((link) => (
            link.items ? (
              <div 
                key={link.title}
                className={styles.dropdown}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <button className={styles.dropdownTrigger}>
                  {link.title}
                  <FaChevronDown className={styles.dropdownIcon} />
                </button>
                {isProductsDropdownOpen && (
                  <div className={styles.dropdownContent}>
                    {link.items.map((item) => (
                      <Link 
                        key={item.title} 
                        to="#" 
                        className={styles.dropdownItem}
                      >
                        <span className={styles.dropdownItemIcon}>{item.icon}</span>
                        <div className={styles.dropdownItemText}>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                key={link.title}
                to="#"
                className={styles.navLink}
              >
                {link.title}
              </Link>
            )
          ))}
        </nav> */}

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* <button className={styles.searchButton}>
            <FaSearch />
            <span>Search</span>
            <kbd className={styles.searchShortcut}>⌘K</kbd>
          </button> */}
          
          <Link to="/login" className={styles.loginButton}>
            <FaRegUser />
            <span>Log in</span>
          </Link>

          {/* <Link to="/signup" className={styles.signupButton}>
            Try Math Solver AI
          </Link> */}

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={styles.mobileNav}>
            {navigationLinks.map((link) => (
              <div key={link.title} className={styles.mobileNavItem}>
                {link.items ? (
                  <>
                    <button className={styles.mobileNavButton}>
                      {link.title}
                      <FaChevronDown />
                    </button>
                    <div className={styles.mobileSubNav}>
                      {link.items.map((item) => (
                        <Link 
                          key={item.title}
                          to="#"
                          className={styles.mobileSubNavItem}
                        >
                          <span className={styles.mobileSubNavIcon}>
                            {item.icon}
                          </span>
                          <div className={styles.mobileSubNavText}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to="#" className={styles.mobileNavLink}>
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;