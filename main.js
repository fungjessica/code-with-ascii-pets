function sayYes(){
    document.getElementById("dialogue").innerText="Bugsy: Great! A variable is like a box. You name it and put stuff in it!\nTry this:\n\nlet snack = 'cookie';\nconsole.log(snack);";
}

function sayNo(){
    document.getElementById("dialogue").innerText="Awe okay, Bugsy sad 🍪🥲";
}

function runCode(){
    const userCode = document.getElementById("textbox").value;
    const output = document.getElementById("console-output");

    try {
        const result = eval(userCode);
        output.textContent = result !== undefined ? result : "Oops! No output D:";
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
}