import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/chatmedhubai.css";

const ChatMedhubAi = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = {
    name: "Chris Brandford",
  };

  // Initialize chat with a welcome message
  useEffect(() => {
    const welcomeMessage = `AI_DOC: Welcome to AI_DOC! ${user.name} How can I assist you today? What are your symptoms?`;
    setMessages([welcomeMessage]);
  }, [user.name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // User message
      setMessages([...messages, `${user.name}: ${input}`]);
      setInput("");

      // Delay AI response for 4 seconds
      setTimeout(() => {
        const aiResponse = "Okay Chris, I will schedule you for an appointment at Navy Town Hospital. You will be attended to by an Obstetrician by 2:00pm. Thank you for your patience, we will get back to you through your email. Have a good day.";
        setMessages((prevMessages) => [...prevMessages, `AI_DOC: ${aiResponse}`]);
      }, 4000); // 4000 milliseconds = 4 seconds
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid  " style={{marginTop:"5rem", height:"100vh"}}>
      <div className="row">
        {/* Sidebar */}
        <nav className="navbar navbar-expand-lg navbar-light-100">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse  ${sidebarOpen ? "show" : ""}`}
          >
            <div className=" sidebar p-3   " style={{ marginTop: "6rem", height:"100vh" }} >
              <h2>Message History</h2>
              <ul className="list-group mt-5">
                {messages.map((message, index) => (
                  <li key={index} className="list-group-item fw-semibold" style={{marginTop:"5rem"}}>
                    {message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Chat Area */}
        <div
          className={`col-lg-10 offset-lg-2 chat-area ${
            sidebarOpen ? "collapsed" : ""
          }`}
        >
          <div className="chat-window" id="chatWindow">
            {messages.map((message, index) => (
              <div key={index} className="message ms-5  bg-primary text-dark  fw-bold">
                {message}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="input-group-append ms-5">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMedhubAi;
