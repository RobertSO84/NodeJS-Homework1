import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const reverseString = async() => {
    const rl = readline.createInterface({input, output});
    try {
        const answer = await rl.question('Please enter a phrase: ');
        const reversed = answer.split('').reverse().join('');
        output.write(`${reversed}\n \n`);

    } catch (error) {
        throw error;

    }
};

reverseString();







