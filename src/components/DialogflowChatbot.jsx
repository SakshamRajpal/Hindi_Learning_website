import React, { useEffect } from "react";

const DialogflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <df-messenger
       intent="WELCOME"
       chat-title="HindiTutorBot"
       agent-id="f904ecd9-017b-4416-be41-eb5a371d8043"
       language-code="en"
    ></df-messenger>
  );
};

export default DialogflowChatbot;