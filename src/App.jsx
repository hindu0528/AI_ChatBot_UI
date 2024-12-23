import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EmailProvider } from './EmailContext/EmailContext'; // Import the EmailProvider
import LoginRegisterPage from './LoginPage/LoginRegisterPage'; // Import your LoginRegisterPage component
import Container from './Main/Container';
import ErrorPage from './Main/ErrorPage';
import './index.css';

const App = () => {
  return (
    <EmailProvider> {/* Wrap in EmailProvider to share email state */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegisterPage />} />
          <Route path="/main" element={<Container />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </EmailProvider>
  );
};

export default App;
