const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const terminatingCommand = "exit";

var waitForUserInput = function () {
    readline.question(`Enter string to reverse or type '${terminatingCommand}' to quit program: `, inputString => {
        if (inputString === terminatingCommand) {
            readline.close();
            process.exit();
        } else {
            var outputString = inputString.split("").reverse().join("");
            console.log(`Reversed string: ${outputString}`);
            waitForUserInput();
        }
    })
};

waitForUserInput();