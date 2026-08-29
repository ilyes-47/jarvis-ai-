function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");
    const text = input.value.trim();

    if (text === "") return;

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = text;

    chat.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Change status
    document.getElementById("status").textContent = "● THINKING";

    // Temporary JARVIS response
    setTimeout(() => {
        const jarvisMessage = document.createElement("div");

        jarvisMessage.className = "message jarvis";

        jarvisMessage.textContent =
            "Certainly, Sir. I am ready for the next stage.";

        chat.appendChild(jarvisMessage);

        document.getElementById("status").textContent = "● ONLINE";

        chat.scrollTop = chat.scrollHeight;

    }, 800);
}


function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


function newChat() {
    document.getElementById("chat").innerHTML = "";

    document.getElementById("status").textContent = "● ONLINE";
}


function openSettings() {
    alert("JARVIS settings will be added later.");
}


function listen() {
    alert("Voice input will be added later.");
}
