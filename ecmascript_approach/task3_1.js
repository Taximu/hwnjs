import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const terminatingCommand = "exit";

let waitForUserInput = function () {
    rl.question(`Enter string to reverse or type '${terminatingCommand}' to quit program: `, inputString => {
        if (inputString === terminatingCommand) {
            rl.close();
            process.exit();
        } else {
            let outputString = inputString.split("").reverse().join("");
            console.log(`Reversed string: ${outputString}`);
            waitForUserInput();
        }
    })
};

waitForUserInput();