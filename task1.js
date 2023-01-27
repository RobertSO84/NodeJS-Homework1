const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString () {
    readline.question('Please enter a phrase: ', (input) => {
        const reversed = input.split('').reverse().join('');
        process.stdout.write(`${reversed}\n \n`);
        reverseString();
        
    });

};

reverseString();

