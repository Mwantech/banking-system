// Chatbot responses
const chatbotResponses = {
    greeting: "Hello! How can I assist you today?",
    balance: "Your account balance is $10,000.",
    transactionHistory: "Here is your transaction history: [Transaction 1, Transaction 2, ...]",
    goodbye: "Goodbye! Have a great day!"
  };

  // Function to display user message
  function displayUserMessage(message) {
    const chatlog = document.getElementById("chatlog");
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = message;
    chatlog.appendChild(userMessage);
  }

  // Function to display bot message
  function displayBotMessage(message) {
    const chatlog = document.getElementById("chatlog");
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = message;
    chatlog.appendChild(botMessage);
  }

  // Function to send user message and receive bot response
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    displayUserMessage(userInput);
    document.getElementById("user-input").value = ""; // Clear input field

    // Check user input and provide appropriate response
    if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
      displayBotMessage(chatbotResponses.greeting);
    } else if (userInput.toLowerCase().includes("balance")) {
      displayBotMessage(chatbotResponses.balance);
    } else if (userInput.toLowerCase().includes("transaction history")) {
      displayBotMessage(chatbotResponses.transactionHistory);
    } else if (userInput.toLowerCase().includes("goodbye")) {
      displayBotMessage(chatbotResponses.goodbye);
    } else {
      displayBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
    }
  }