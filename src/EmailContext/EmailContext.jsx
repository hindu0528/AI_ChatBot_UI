import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

// Add prop types validation
EmailProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children prop is required
};
