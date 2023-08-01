//This is the script for the Terminal like About page
//If you are viewing and found the issues, please let me know
//This website is only for educational purposes, misuase of any kind of contents material is strictlly prohibited
const terminalElement = document.getElementById('terminal');
const bootMessages = [
    { text: "Apply Kernel Variables..", type: "regular" },
    { text: "[OK] Started Journal Service.", type: "ok" },
    { text: "[OK] Mounted FUSE Control File System.", type: "ok" },
    { text: "[OK] Mounted Kernel Configuration File System.", type: "ok" },
    { text: "[OK] Finished Apply Kernel Variables.", type: "ok" },
    { text: "[OK] Finished udev Coldplug all Devices.", type: "ok" },
    { text: "[OK] Starting Flush Journal to Persistent Storage.", type: "ok" },
    { text: "[ERROR]: Permission Denied", type: "error" },
    { text: "[FATAL ERROR]: Yo!", type: "error" },
    { text: "YOU DIDN'T SAY THE SPECIAL WORDS", type: "regular" },
    { text: "WELCOME TO CUSVT!", type: "regular" },
    { text: "TYPE HELP FOR MORE!", type: "regular" },
];

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
}
const currentTime = getCurrentTime();
terminalElement.innerHTML += `<div class="regular">${currentTime} -!- Starting CUSVT - This might take time</div>`;

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
                showResponse("Example commands:<br>whoami <br>neofetch <br>question<br>home - Go home");
                break;
            case "whoami":
                showResponse("My Name is Toshiki <br>Welcome to My Website!");
                break;
            case "question":
                showResponse("This website was made to showcase my skills and share my knowledge with others.");
                break;
            case "neofetch":
                showResponse("(__)<br>(oo)<br>/---------/ <br>   / | H3H3 || P <br>Look Behind OO");
                break;
            case "ls":
                showResponse("Applications Downloads Music Desktop <br>Downloads secret.txt ");
                break;
            case "sudo su":
                showResponse("Hmmm, What do you want??");
                break;
            case "cat secret.txt":
                showResponse("Permission Denied: You cannot see my secret at this momenet lol");
                break;
            case "home":
                window.location.href = "index.html";
                break;
            default:
                showResponse("bash: Command not found. Type 'help' to see available commands.");
                break;
        }

        inputElement.value = "";
    }
}


function showResponse(response) {
    terminalElement.innerHTML += `<div class="regular">${response}</div>`;
    terminalElement.innerHTML += '<div class="input-line"><span class="prompt">root@cusvt:~#</span> <input type="text" onkeydown="handleCommand(event)"></div>';
}

simulateBootProcess();
