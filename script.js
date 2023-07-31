const terminalElement = document.getElementById('terminal');
const bootMessages = [
    { text: "Starting Apply Kernel Variables..", type: "regular" },
    { text: "[OK] Started Journal Service.", type: "ok" },
    { text: "[OK] Mounted FUSE Control File System.", type: "ok" },
    { text: "[OK] Mounted Kernel Configuration File System.", type: "ok" },
    { text: "[OK] Finished Apply Kernel Variables.", type: "ok" },
    { text: "[OK] Finished udev Coldplug all Devices.", type: "ok" },
    { text: "[OK] Starting Flush Journal to Persistent Storage.", type: "ok" },
    { text: "WELCOME TO CUSVT!", type: "regular" },
    { text: "TYPE HELP FOR MORE!", type: "regular" },
];

const messageDelay = 500;

function typeMessage(message, type, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            terminalElement.innerHTML += `<div class="${type}">${message}</div>`;
            resolve();
        }, delay);
    });
}

async function simulateBootProcess() {
    for (let i = 0; i < bootMessages.length; i++) {
        const { text, type } = bootMessages[i];
        await typeMessage(text, type, messageDelay);
    }
    terminalElement.innerHTML += '<div class="input-line"><span class="prompt">root@cusvt:~#</span> <input type="text" onkeydown="handleCommand(event)"></div>';
    inputElement.focus();
}

function handleCommand(event) {
    if (event.key === "Enter") {
        const inputElement = event.target;
        const command = inputElement.value.trim().toLowerCase();

        switch (command) {
            case "help":
                showResponse("Available commands:<br>whoami <br>question<br>home - Go home");
                break;
            case "whoami":
                showResponse("My Name is Toshiki");
                break;
            case "question":
                showResponse("This website was made to showcase my skills and share my knowledge with others.");
                break;
            case "home":
                window.location.href = "index.html";
                break;
            default:
                showResponse("Command not found. Type 'help' to see available commands.");
                break;
        }

        inputElement.value = "";
    }
}


function showResponse(response) {
    terminalElement.innerHTML += `<div class="regular">${response}</div>`;
    terminalElement.innerHTML += '<div class="input-line"><span class="prompt">root@mywebsite:~#</span> <input type="text" onkeydown="handleCommand(event)"></div>';
}

simulateBootProcess();
