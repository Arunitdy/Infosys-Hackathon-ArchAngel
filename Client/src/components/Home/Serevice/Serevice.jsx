import React, { useState } from "react";
import "./Serevice.css";
import { FiSend } from "react-icons/fi";

const faqData = [
  {
    question: "How do I register for medical services?",
    answer: "Go to the Medical section and choose a hospital to request registration.",
  },
  {
    question: "Can I transfer my service history from one state to another?",
    answer: "Yes, our platform supports transfer of previous service history across states.",
  },
  {
    question: "How can I update my personal documents?",
    answer: "Navigate to the Documents section and use the + button to upload or update documents.",
  },
];

const Services = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { from: "user", text: newMessage }]);
      setNewMessage("");
      // Mock bot response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { from: "bot", text: "Thank you for reaching out! We will assist you shortly." },
        ]);
      }, 500);
    }
  };

  return (
    <div className="services-container">
      <h2>Service Assistance</h2>

      <div className="services-content">
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="faq-item"
              onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
            >
              <div className="faq-question">{item.question}</div>
              {openQuestion === idx && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="chat-section">
          <h3>Chat with Us</h3>
          <div className="chat-box">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
