// Main.jsx
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa"; 
import styles from './Main.module.css';
import logo from '../assets/images/logo.png';

const Main = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'user', content: 'Hello, how can I help you today?' },
    { type: 'assistant', content: 'Hi there! I\'m the AI assistant. How can I assist you with your math problems?' },
    { type: 'user', content: 'I have a problem with solving quadratic equations. Can you help me?' },
    { type: 'assistant', content: `Sure, I'd be happy to help you with that. Can you please provide more details about the problem you're facing?` },
  ]);

  const handleOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);
    // Implement redirection logic or file upload handling here
    // For example, navigate to another page or trigger file input
    setDropdownVisible(false); // Hide dropdown after selection
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { type: 'user', content: message }]);
    // Call API to send message and get assistant's response
    const assistantResponse = 'Hello, how can I help you today?';
    setMessages([...messages, { type: 'user', content: message }, { type: 'assistant', content: assistantResponse }]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.chatContainer}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${message.type === 'user' ? styles.userMessage : styles.assistantMessage}`}>
            {message.type === 'assistant' && (
              <div className={styles.assistantInfo}>
                <img src={logo} alt="AI Assistant" className={styles.logo} />
                {/* <div className={styles.assistantName}>AI Assistant</div> */}
              </div>
            )}
            <div className={styles.messageContent}>{message.content}</div>
          </div>
        ))}
      </div>
      <div className={styles.chatInputContainer}>
        <div className={styles.iconContainer}>
          <FaPaperclip 
            className={styles.attachmentIcon} 
            onClick={() => setDropdownVisible(!dropdownVisible)} 
            onMouseEnter={() => setTooltipVisible(true)} 
            onMouseLeave={() => setTooltipVisible(false)} 
          />
          {tooltipVisible && <span className={styles.tooltip}>Attach file</span>}
        </div>
        <input 
          type="text" 
          className={styles.chatInput} 
          placeholder="Type a message..." 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage(e.target.value);
              e.target.value = '';
            }
          }} 
        />
        <button 
          className={styles.sendButton}
          onClick={() => {
            const message = document.querySelector('.chatInput').value;
            if (message.trim() !== '') {
              handleSendMessage(message);
              document.querySelector('.chatInput').value = '';
            }
          }}
        >
          <IoMdSend className={styles.sendIcon} />
        </button>
      </div>
      {dropdownVisible && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownOption} onClick={() => handleOptionSelect('Upload from Drive')}>Upload from Drive</div>
          <div className={styles.dropdownOption} onClick={() => handleOptionSelect('Upload from This PC')}>Upload from This PC</div>
        </div>
      )}
    </div>
  );
};

export default Main;