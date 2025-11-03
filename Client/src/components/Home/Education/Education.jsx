import React, { useState, useEffect, useRef } from "react";
import Header from "../../Header/Header";
import { FaMicrophone, FaMicrophoneSlash, FaPaperPlane } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  // State for academic credits
  const [previousCredits, setPreviousCredits] = useState([
    {
      subject: "Mathematics I",
      institution: "Kerala State University",
      grade: "A+",
      GPA: "4.0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaO_7tveISc-K4_h8Dxrk6geqzW_6ar7wyA&s",
      contact: "math@ksu.edu.in"
    },
    {
      subject: "English Communication",
      institution: "Goa Central College",
      grade: "B",
      GPA: "3.2",
      image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1440399087l3.jpg",
      contact: "english@goacc.in"
    },
    {
      subject: "Computer Fundamentals",
      institution: "TN Tech Institute",
      grade: "C-",
      GPA: "1.9",
      image: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi.jpeg",
      contact: "cs@tntech.edu"
    }
  ]);

  // State for institutions
  const [institutions] = useState([
    {
      id: 1,
      name: "Anna University",
      location: "Chennai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZd0VdljpugzgvUMm3u9avG8tZF-ysfiLoQ&s",
      contact: "admissions@annauniv.edu",
      representative: "Dr. Rajesh Kumar"
    },
    {
      id: 2,
      name: "Delhi Tech University",
      location: "New Delhi",
      image: "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
      contact: "info@dtu.ac.in",
      representative: "Prof. Meena Sharma"
    },
    {
      id: 3,
      name: "Mumbai Knowledge Campus",
      location: "Mumbai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbmjCgQYd5q8baJdwLDG11_DWgwxL0Svq3g&s",
      contact: "mumbai@mkcampus.in",
      representative: "Dr. Anil Deshpande"
    },
  ]);

  // State for modals and forms
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentInstitution, setCurrentInstitution] = useState(null);
  const [newCredit, setNewCredit] = useState({ subject: "", institution: "", GPA: "", grade: "" });
  const [searchCredit, setSearchCredit] = useState("");
  const [searchInstitution, setSearchInstitution] = useState("");

  // State for chat functionality
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recognitionError, setRecognitionError] = useState(null);
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setNewMessage(transcript);
        setIsRecording(false);
        setRecognitionError(null);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        setRecognitionError(event.error);
        
        if (event.error === 'no-speech') {
          setNewMessage(""); // Clear "Listening..." message
        }
      };
      
      recognitionRef.current.onend = () => {
        if (isRecording && !recognitionError) {
          // Only stop if not already stopped by an error
          setIsRecording(false);
        }
      };
    } else {
      console.warn("Speech recognition not supported in this browser");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Filter functions
  const filteredCredits = previousCredits.filter(
    (credit) =>
      credit.subject.toLowerCase().includes(searchCredit.toLowerCase()) ||
      credit.institution.toLowerCase().includes(searchCredit.toLowerCase()) ||
      credit.GPA.toLowerCase().includes(searchCredit.toLowerCase())
  );

  const filteredInstitutions = institutions.filter(
    (inst) =>
      inst.name.toLowerCase().includes(searchInstitution.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchInstitution.toLowerCase())
  );

  // Handler functions
  const handleTransfer = (inst) => {
    alert(`Transfer request sent to ${inst.name}`);
  };

  const handleConnect = (inst) => {
    setCurrentInstitution(inst);
    setShowChat(true);
    setMessages([{
      id: 1,
      text: `Hello! I'm ${inst.representative} from ${inst.name}. How can I help with your credit transfer?`,
      sender: 'institution',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && !isRecording) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      // Simulate response after 1 second
      setTimeout(() => {
        const responses = [
          "We can help with that transfer. Could you share more details about your coursework?",
          "That credit should transfer without issues. We'll need your official transcripts.",
          "Our evaluation committee will review this within 3-5 business days.",
          "Let me check our transfer equivalency database for you."
        ];
        const botMessage = {
          id: messages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: 'institution',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const toggleVoiceRecording = async () => {
    if (!recognitionRef.current) {
      alert("Voice recognition is not supported in your browser");
      return;
    }
    
    try {
      if (isRecording) {
        recognitionRef.current.stop();
      } else {
        // Check for microphone permissions
        try {
          await navigator.permissions.query({ name: 'microphone' });
        } catch (error) {
          console.log("Microphone permission query not supported in this browser");
        }
        
        setNewMessage("Listening...");
        setIsRecording(true);
        setRecognitionError(null);
        recognitionRef.current.start();
        
        // Set timeout for no speech detection
        setTimeout(() => {
          if (isRecording && !recognitionError) {
            recognitionRef.current.stop();
            alert("No speech detected. Please try again.");
          }
        }, 10000);
      }
    } catch (error) {
      console.error("Recognition error:", error);
      setIsRecording(false);
      setRecognitionError(error.message);
      alert("Error accessing microphone. Please check permissions.");
    }
  };

  const handleInputChange = (e) => {
    if (!isRecording) {
      setNewCredit({ ...newCredit, [e.target.name]: e.target.value });
    }
  };

  const handleAddCredit = () => {
    if (newCredit.subject && newCredit.institution && newCredit.GPA && newCredit.grade) {
      setPreviousCredits([...previousCredits, {
        ...newCredit,
        image: "https://via.placeholder.com/100",
        contact: "contact@example.edu"
      }]);
      setNewCredit({ subject: "", institution: "", GPA: "", grade: "" });
      setShowModal(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="education-page">
      <Header title="Education Transfer" />
      <div className="credit-transfer-container">
        {/* Left Panel - Previous Credits */}
        <div className="credit-left">
          <h2>Previous Academic Credits</h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Search credits..."
            value={searchCredit}
            onChange={(e) => setSearchCredit(e.target.value)}
          />
          <div className="credit-history">
            {filteredCredits.map((credit, index) => (
              <div className="credit-item" key={index}>
                <div className="credit-header">
                  <img src={credit.image} alt={credit.subject} className="credit-image" />
                  <div className="credit-info">
                    <h4>{credit.subject}</h4>
                    <p><strong>Institution:</strong> {credit.institution}</p>
                    <p><strong>Grade:</strong> {credit.grade} (GPA: {credit.GPA})</p>
                    <p><strong>Contact:</strong> {credit.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Institutions */}
        <div className="credit-right">
          <h2>Available Institutions</h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Search institutions..."
            value={searchInstitution}
            onChange={(e) => setSearchInstitution(e.target.value)}
          />
          <div className="institution-list">
            {filteredInstitutions.map((inst) => (
              <div className="institution-card" key={inst.id}>
                <div className="institution-details">
                  <img src={inst.image} alt={inst.name} className="institution-image" />
                  <div className="institution-info">
                    <h4>{inst.name}</h4>
                    <p><strong>Location:</strong> {inst.location}</p>
                    <p><strong>Contact:</strong> {inst.contact}</p>
                    <p><strong>Representative:</strong> {inst.representative}</p>
                  </div>
                </div>
                <div className="institution-actions">
                  <button 
                    className="transfer-btn"
                    onClick={() => handleTransfer(inst)}
                  >
                    Request Transfer
                  </button>
                  <button 
                    className="connect-btn"
                    onClick={() => handleConnect(inst)}
                  >
                    Live Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="add-credit-button" onClick={() => setShowModal(true)}>
        <span>+</span>
      </button>

      {/* Add Credit Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Credit</h3>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={newCredit.subject}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={newCredit.institution}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="grade"
              placeholder="Letter Grade (e.g., A, B+)"
              value={newCredit.grade}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="GPA"
              placeholder="GPA (e.g., 3.5)"
              value={newCredit.GPA}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={handleAddCredit}>Add Credit</button>
              <button className="cancel" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChat && currentInstitution && (
        <div className="chat-modal-overlay">
          <div className="chat-modal-content">
            <div className="chat-header">
              <div className="chat-institution-info">
                <img src={currentInstitution.image} alt={currentInstitution.name} className="chat-institution-image" />
                <div>
                  <h4>{currentInstitution.name}</h4>
                  <p>Credit Transfer Support</p>
                </div>
              </div>
              <button 
                className="close-chat"
                onClick={() => {
                  if (isRecording) {
                    recognitionRef.current.stop();
                  }
                  setShowChat(false);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="chat-messages">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`message ${msg.sender}`}
                >
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
              {recognitionError === 'no-speech' && (
                <div className="message system">
                  <div className="message-content">
                    <p>No speech detected. Please try again.</p>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            
            <div className="chat-input-area">
              <input
                type="text"
                placeholder={isRecording ? "Listening... Speak now" : "Type your message..."}
                value={isRecording ? "Listening... Speak now" : newMessage}
                onChange={(e) => !isRecording && setNewMessage(e.target.value)}
                onKeyPress={(e) => !isRecording && e.key === 'Enter' && handleSendMessage()}
                disabled={isRecording}
              />
              <button 
                className="send-btn"
                onClick={handleSendMessage}
                disabled={isRecording}
              >
                <FaPaperPlane />
              </button>
              <button 
                className={`voice-btn ${isRecording ? 'recording' : ''}`}
                onClick={toggleVoiceRecording}
                title={isRecording ? 'Stop recording' : 'Start voice recording'}
              >
                {isRecording ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;