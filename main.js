function sayYes(){
    document.getElementById("console-section").style.display = "block";
    document.getElementById("dialogue").innerText="Bugsy: Great! A variable is like a box. You name it and put stuff in it!\nTry this:\n\nlet snack = 'cookie';\nconsole.log(snack);";
}

function sayNo(){
    document.getElementById("dialogue").innerText="Awe okay, Bugsy sad 🍪🥲";
}

function runCode() {
    const userCode = document.getElementById("textbox").value;
    const output = document.getElementById("console-output");

    output.textContent = '';

    const originalConsoleLog = console.log;
    console.log = function(message) {
        output.textContent += message + '\n';
    };

    try {
        eval(userCode);
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }

    console.log = originalConsoleLog;
}