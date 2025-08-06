function sayYes(){
    document.getElementById("console-section").style.display = "block";
    document.getElementById("examples").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("dialogue").innerText = 
        "Bugsy: Great! A variable is like a box. You name it and put stuff in it!\nTry this:\n\nlet snack = 'cookie';\nconsole.log(snack);";
}

function sayNo(){
    document.getElementById("console-section").style.display = "none";
    document.getElementById("dialogue").innerText="Awe okay, Bugsy sad 🍪🥲";
}

function runCode() {
    const userCode = document.getElementById("textbox").value;
    const output = document.getElementById("console-output");

    output.textContent = '';

    const originalConsoleLog = console.log;
    console.log = function(message) {
        output.textContent += message + '\n';

        if (message === "cookie") {
            document.getElementById("examples").style.display = "none";
            document.getElementById("quiz").style.display = "block";
        }
    };

    try {
        eval(userCode);
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }

    console.log = originalConsoleLog;
}