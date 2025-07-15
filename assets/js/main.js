document.addEventListener('DOMContentLoaded', () => {
  const chatLog = document.getElementById('chat-log');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      appendMessage(userMessage, 'user-message');
      userInput.value = '';
      // Mock bot response
      setTimeout(() => {
        appendMessage(`You said: "${userMessage}"`, 'bot-message');
      }, 500);
    }
  }

  function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    const p = document.createElement('p');
    p.textContent = message;
    messageElement.appendChild(p);
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
});
