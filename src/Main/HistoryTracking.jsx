// HistoryTracking.jsx
import { useContext } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';
import styles from './HistoryTracking.module.css';
import { EmailContext } from '../EmailContext/EmailContext';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const HistoryTracking = () => {
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate("/", { replace: true });
  };
  const conversations = [
    { id: 1, title: '9th Standard Maths questions', timestamp: '2024-11-01 10:30 AM' },
    { id: 2, title: 'Graph the parabola y = x^2.', timestamp: '2024-11-02 2:45 PM' },
    { id: 3, title: 'Pythagorean Theorem in 5 steps', timestamp: '2024-11-03 9:15 AM' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.historyContainer}>
        <div className={styles.headerContainer}>
          <h2 className={styles.heading}>Chat History</h2>
          <div className={styles.creditsContainer}>
            <FaCreditCard className={styles.creditIcon} />
            <div className={styles.credits}>50</div>
          </div>
        </div>
        <div className={styles.conversationList}>
          {conversations.map((conversation) => (
            <div key={conversation.id} className={styles.conversationButton}>
              <div className={styles.conversationTitle}>{conversation.title}</div>
              <div className={styles.conversationTimestamp}>{conversation.timestamp}</div>
            </div>
          ))}
        </div>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfo}>
            <img src={logo} alt="AI Assistant" className={styles.logo} />
            <div>
            <div className={styles.userName}>Math Solver AI</div>
            <div className={styles.conversationTimestamp}>Powered by Pragyshala</div>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.emailButton}>
              <span>{email}</span>
            </button> 
            <button className={styles.addCreditsButton}>
              <FaCreditCard className={styles.creditIcon} />
              Add Credits
            </button>
            <button className={styles.signOutButton} onClick={handleLogout}>
              <FaSignOutAlt className={styles.signOutIcon} />
              Sign Out
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTracking;